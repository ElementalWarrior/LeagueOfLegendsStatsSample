
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './History.css';

const ddragon = "https://ddragon.leagueoflegends.com/";
const imagePathVersioned = ddragon + "cdn/8.18.1/img/";
const imagePath = ddragon + "cdn/img/";
class History extends React.Component {
  // static propTypes = {
  //   news: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       link: PropTypes.string.isRequired,
  //       content: PropTypes.string,
  //     }),
  //   ).isRequired,
  // };
  
  parseDuration(seconds) {
    let formatted = '';
    if(parseInt(seconds / 3600) > 0) {
      formatted += Math.floor(seconds/3600) + 'h ';
    }
    if(parseInt(seconds / 60) > 0) {
      formatted += Math.floor(seconds/60) + 'm ';
    }
    formatted += seconds % 60 + 's';
    return formatted;
  }
  render() {
    console.log(this)
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Summoner {this.props.summoner.name} Match History</h1>
          <ul className={s.listUnstyled + ' ' + s.matchHistory}>
            {this.props.summoner.matches.map(match => (
              <li className={s.matchHistoryItem + ' ' + (match.won ? s.matchWon : s.matchLost)}>
                <div className={s.flex}>

                  <div>
                    <div className={s.gameDuration}>{this.parseDuration(match.gameDuration)}</div>
                    <div className={s.gameWon}>{match.won ? "You won!": "You lost :("}</div>
                  </div>

                  <div>
                    <img
                      src={imagePathVersioned + 'champion/' + match.championName + '.png'}
                      alt={match.championName}
                      className={s.championPortrait}
                     />
                    <div>{match.championName}</div>
                  </div>

                  <div>
                    <div className={s.spells}>{!match.summonerSpells || match.summonerSpells.map(spell => 
                      <img
                        src={imagePathVersioned + 'spell/' + spell.imageUrl}
                        className={s.matchHistoryIcon}
                        alt={spell.name}
                        />
                    )}</div>
                    
                    <div className={s.runs}>{!match.runes || match.runes.map(rune => 
                      <img
                        src={imagePath + rune.icon}
                        alt={rune.name}
                        className={s.matchHistoryIcon}
                        />
                    )}</div>
                  </div>

                  <div>
                    <div>Level {match.championLevel}</div>
                    <div>{match.kills} / <span className={s.deathStat}>{match.deaths}</span> / {match.assists}</div>
                    <div>{match.creepScore} ({match.creepScorePerMinute.toFixed(2)}/min) CS</div>
                  </div>

                  <div>
                    <div className={s.itemLabel}>Items:</div>
                    {match.itemsBought.map(item => 
                      <img
                        src={imagePathVersioned + 'item/' + item.imageUrl}
                        alt={item.name}
                        className={s.matchHistoryIcon}
                        />
                    )}
                  </div>
                </div>
                </li>
            ))}
            
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(History);
