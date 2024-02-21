import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from './schemaTypes/pageInfo'


export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    pageInfo,
  ])
})