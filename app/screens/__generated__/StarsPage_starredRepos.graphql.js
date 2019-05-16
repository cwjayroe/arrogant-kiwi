/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type StarsPage_starredRepos$ref: FragmentReference;
declare export opaque type StarsPage_starredRepos$fragmentType: StarsPage_starredRepos$ref;
export type StarsPage_starredRepos = {|
  +starredRepositories: {|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string,
      +node: {|
        +primaryLanguage: ?{|
          +name: string
        |},
        +description: ?string,
        +name: string,
        +url: any,
        +createdAt: any,
        +id: string,
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +endCursor: ?string,
      +startCursor: ?string,
    |},
  |},
  +$refType: StarsPage_starredRepos$ref,
|};
export type StarsPage_starredRepos$data = StarsPage_starredRepos;
export type StarsPage_starredRepos$key = {
  +$data?: StarsPage_starredRepos$data,
  +$fragmentRefs: StarsPage_starredRepos$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "StarsPage_starredRepos",
  "type": "User",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": "endCursor",
        "direction": "forward",
        "path": [
          "starredRepositories"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "endCursor",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "starredRepositories",
      "name": "__StarsPage_starredRepositories_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "StarredRepositoryConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "StarredRepositoryEdge",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Repository",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "primaryLanguage",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Language",
                  "plural": false,
                  "selections": [
                    (v0/*: any*/)
                  ]
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "description",
                  "args": null,
                  "storageKey": null
                },
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "url",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "createdAt",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '4f8f45a6688aeaade5466fd8d3d3bfed';
module.exports = node;
