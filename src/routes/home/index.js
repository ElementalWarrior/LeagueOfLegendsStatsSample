import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  return {
    title: "Home",
    chunks: ['home'],
    component: (<Layout><Home/></Layout>),
  };
  // return {
  //   title: 'React Starter Kit',
  //   chunks: ['home'],
  //   component: (
  //     <Layout>
  //       <Home news={data.news} />
  //     </Layout>
  //   ),
  // };
}

export default action;
