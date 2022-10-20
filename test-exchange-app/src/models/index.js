// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ExInfo, MemInfo } = initSchema(schema);

export {
  ExInfo,
  MemInfo
};