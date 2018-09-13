
import {
  GraphQLObjectType as ObjectType,
  GraphQLString as StringType,
  GraphQLIntType as IntType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const MatchType = new ObjectType({
  name: 'Match',
  fields: {
    // title: { type: new NonNull(StringType) },
    // link: { type: new NonNull(StringType) },
    // author: { type: StringType },
    // pubDate: { type: new NonNull(StringType) },
    // content: { type: StringType },

    // lane: { type: StringType	},
    // gameId: { type: IntType	},
    // champion: { type: IntType	},
    // platformId: { type: StringType	},
    // season: { type: IntType	},
    // queue: { type: IntType	},
    // role: { type: StringType	},
    // timestamp: { type: IntType },

    seasonId: { type: IntType },
    queueId: { type: IntType },
    gameId: { type: IntType },
    participantIdentities: { type: List[ObjectType] },
    // participantIdentities: { type: List[ParticipantIdentityDto] },
    gameVersion: { type: StringType },
    platformId: { type: StringType },
    gameMode: { type: StringType },
    mapId: { type: IntType },
    gameType: { type: StringType },
    teams: { type: List[ObjectType] },
    // teams: { type: List[TeamStatsDto] },
    participants: { type: List[ObjectType] },
    // participants: { type: List[ParticipantDto] },
    gameDuration: { type: IntType },
    gameCreation: { type: IntType }
    
  },
});

export default NewsItemType;
