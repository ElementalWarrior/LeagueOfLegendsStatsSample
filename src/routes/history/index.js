
import React from 'react';
import History from './History';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  console.log(arguments);
  let summonerName= params[0];
  if(!summonerName || !summonerName.trim()) {
    throw new Error("Must pass summoner name.");
  }
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{summoner(name:"' + summonerName + '"){matches{gameId, gameDuration,summonerSpells{id, name, key, description,imageUrl},championName, won, kills,deaths,assists, championLevel,creepScore,creepScorePerMinute, itemsBought{name, description, plaintext, imageUrl}, runes{id, key, name, icon, shortDesc, longDesc}}}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.summoner) throw new Error('Failed to load the match data.');
  return {
    title: 'Match history for ' + summonerName,
    chunks: ['home'],
    component: (<Layout><History summoner={data.summoner}/></Layout>),
  };
}

export default action;
