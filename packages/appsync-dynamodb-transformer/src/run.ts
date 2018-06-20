import GraphQLTransform from "graphql-transform";
import { AppSyncDynamoDBTransformer } from "./AppSyncDynamoDBTransformer";

import fs = require('fs');

const validSchema = `type Post @model {
    id: ID!
    title: String!
    rating: Int!
    tags: [String]
}`;

const transformer = new GraphQLTransform({
    transformers: [new AppSyncDynamoDBTransformer()]
});
const out = transformer.transform(validSchema);
fs.writeFile('cf.out.json', JSON.stringify(out, null, 4), (err) => {
    if (err) {
        throw err;
    }
    console.log('SUCCESS!');
});
