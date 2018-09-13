
import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import summoner from './queries/summoner';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      // me,
      summoner,
    },
  }),
});

export default schema;
