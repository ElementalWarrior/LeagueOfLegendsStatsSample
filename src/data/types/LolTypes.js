


import {
    GraphQLList as List,
    GraphQLObjectType as ObjectType,
    GraphQLString as StringType,
    GraphQLInt as IntType,
    GraphQLBoolean as BooleanType,
    GraphQLFloat as FloatType,
    GraphQLNonNull as NonNull,
  } from 'graphql';
  import {default as LongType} from 'graphql-type-long';

const MatchReferenceType = new ObjectType({
    name: "match_reference",
    fields: {
        platformId: { type: StringType },
        gameId: { type: LongType },
        champion: { type: IntType },
        queue: { type: IntType },
        season: { type: IntType },
        timestamp: { type: LongType },
        role: { type: StringType },
        lane: { type: StringType },
    }
});

const ItemImageType = new ObjectType({
    name: "item_image",
    fields: {
        name: { type: StringType },
        description: { type: StringType },
        plaintext: { type: StringType },
        imageUrl: { type: StringType },
    }
});

const RuneType = new ObjectType({
    name: "rune",
    fields: {
        id: { type: IntType },
        key: { type: StringType },
        icon: { type: StringType },
        name: { type: StringType },
        shortDesc: { type: StringType },
        longDesc: { type: StringType }
    }
});

const SummonerSpellType = new ObjectType({
    name: "summoner_spell",
    fields: {
        id: { type: StringType },
        name: { type: StringType },
        description: { type: StringType },
        tooltip: { type: StringType },
        key: { type: StringType },
        summonerLevel: { type: IntType },
        imageUrl: { type: StringType },
    }
});
  
const MatchType = new ObjectType({
    name: "match",
    fields: {
        gameId: { type: LongType },
        won: { type: BooleanType },
        gameDuration: { type: IntType }, 
        summonerName: { type: StringType },
        summonerSpells: { type: new List(SummonerSpellType) },
        // summonerRunes: { type: StringType },
        championName: { type: StringType },
        kills: { type: IntType },
        deaths: { type: IntType },
        assists: { type: IntType },
        itemsBought: { type: new List(ItemImageType) },
        runes: { type: new List(RuneType) },
        championLevel: { type: IntType },
        creepScore: { type: IntType },
        creepScorePerMinute: { type: FloatType }
    }
});
const SummonerType = new ObjectType({
    name: "summoner",
    fields: {
        name: { type: StringType },
        matches: { type: new List(MatchType) },
        // matches: { type: List[MatchType] },
    }
});



export { SummonerType, MatchType, MatchReferenceType };