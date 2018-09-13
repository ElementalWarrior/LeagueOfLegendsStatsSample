import { GraphQLList as List,
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType
} from 'graphql';
// import kayn, { REGIONS } from 'kayn';
import { Kayn, REGIONS, METHOD_NAMES, LRUCache } from 'kayn';
import { SummonerType } from '../types/LolTypes';

const kayn = Kayn("RGAPI-3ede8c13-5ba5-4bc3-9aee-94eb13338e89")({
  debugOptions: {
    isEnabled: true
  },
  region: REGIONS.NORTH_AMERICA,
  cacheOptions: {
    cache: new LRUCache( 60 * 60 * 24 ),
    timeToLives: {
      useDefault: true,
      byMethod: {
        [METHOD_NAMES.MATCH.GET_MATCH]: 1000 * 3600 * 24, // ms
      },
      byGroup: {
        DDRAGON: 1000 * 60 * 60 * 24 * 30, // cache for a month
      },
    }
  }
});
const ddragon_version = "6.24.1";


const summoner = {
  type: SummonerType,
  args: {
      name: { type: StringType },
  },
  resolve(obj, args, context, info) {
    
    // return new Promise((done, reject) => {
    //   setTimeout(function() {

    //     done({ name :'fifi'});
    //   }, 1000);

      
    // });
    
    return new Promise((done, reject) => {
      kayn.Summoner.by.name(args.name)
      .callback(async (unhandlederror, summoner) => {
        let matches = [];
        const matchlist = await kayn.Matchlist.by.accountID(summoner.accountId);
        matchlist.matches.splice(10, matchlist.matches.length);
        
        //get information of all runes/champions, not tied to match
        let runes = await kayn.DDragon.RunesReforged.list().version('8.16.1');
        let champions = (await kayn.DDragon.Champion.list().version('8.16.1')).data;
        let items = (await kayn.DDragon.Item.list().version('8.16.1')).data;
        let summoner_spells = (await kayn.DDragon.SummonerSpell.list().version('8.16.1')).data;

        for(let matchref of matchlist.matches) {
          let match = await kayn.Match.get(matchref.gameId);

          //find out which player in the match we are.
          let participantId = null;
          for(let part_ident of match.participantIdentities) {
            if(part_ident.player.accountId == summoner.accountId) {
              participantId = part_ident.participantId;
            }
          }
          // console.log(kayn.DDragon);
          
          //get summoner/champion data 
          for(let participant of match.participants) {
            if(participant.participantId == participantId) {

              match.won= participant.stats.win;
              match.kills = participant.stats.kills;
              match.deaths = participant.stats.deaths;
              match.assists = participant.stats.assists;
              match.championLevel = participant.stats.champLevel;
              match.creepScore = participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled;
              match.creepScorePerMinute = (participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled) / (match.gameDuration/60);

              //get champion information
              let player_champ = Object.values(champions).filter(champion => {
                return champion.key == participant.championId;
              })[0] || null;
              match.championName = player_champ.id;

              // get rune information
              let player_runes = [
                participant.stats.perk0,
                participant.stats.perk1
              ];
              for(let root_rune of runes) {
                for(let slot of root_rune.slots){
                  for(let rune of slot.runes) {
                    for(var i = 0; i < player_runes.length; i++) {
                      if(player_runes[i] == rune.id) {
                        player_runes[i] = rune;
                      }
                    }
                  }
                }
              }

              // console.log(['player_runes', player_runes]);
              match.runes = player_runes.filter(r => r != null);

              // get summoner spells
              let spells = [
                participant.spell1Id,
                participant.spell2Id,
              ];
              // console.log(['spells', spells]);
              spells = spells.map(spellId => {
                let spell = Object.values(summoner_spells).filter(s => {
                  return s.key == spellId
                })[0] || null;
                if(spell){
                  spell.imageUrl = spell.image.full;
                }
                return spell;
              });
              // console.log(spells);
              match.summonerSpells = spells.filter(s => s != null);
              

              // get item information
              let player_items = [
                participant.stats.item0,
                participant.stats.item1,
                participant.stats.item2,
                participant.stats.item3,
                participant.stats.item4,
                participant.stats.item5,
                participant.stats.item6
              ];
              player_items = player_items.map((itemId) => {
                if(!itemId || itemId == 0) {
                  return null;
                }
                const item_lookup = items[itemId.toString()];
                if(!item_lookup) {
                  return null;
                }
                return {
                  name: item_lookup.name,
                  description: item_lookup.description,
                  plaintext: item_lookup.plaintext,
                  imageUrl: item_lookup.image.full
                }
              });
              match.itemsBought = player_items.filter(item => item != null);
            }
          }
          
          matches.push(match);
        }
        done({ name: 'foofoo', matches: matches });
      });
    });
  },
};

export default summoner;
