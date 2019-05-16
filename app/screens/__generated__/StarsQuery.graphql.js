/**
 * @flow
 * @relayHash 364604350d90f5ed20ef4b10380dfbcf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type StarsQueryVariables = {|
  endCursor: string
|};
export type StarsQueryResponse = {|
  +viewer: {|
    +starredRepositories: {|
      +nodes: ?$ReadOnlyArray<?{|
        +primaryLanguage: ?{|
          +name: string
        |},
        +description: ?string,
        +name: string,
        +url: any,
        +createdAt: any,
        +id: string,
      |}>,
      +pageInfo: {|
        +endCursor: ?string,
        +startCursor: ?string,
      |},
    |}
  |}
|};
export type StarsQuery = {|
  variables: StarsQueryVariables,
  response: StarsQueryResponse,
|};
*/


/*
query StarsQuery(
  $endCursor: String!
) {
  viewer {
    starredRepositories(first: 5, after: $endCursor) {
      nodes {
        primaryLanguage {
          name
          id
        }
        description
        name
        url
        createdAt
        id
      }
      pageInfo {
        endCursor
        startCursor
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "endCursor",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "endCursor"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = {
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StarsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starredRepositories",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "StarredRepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Repository",
                "plural": true,
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
                      (v2/*: any*/)
                    ]
                  },
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              },
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StarsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "starredRepositories",
            "storageKey": null,
            "args": (v1/*: any*/),
            "concreteType": "StarredRepositoryConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Repository",
                "plural": true,
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
                      (v2/*: any*/),
                      (v6/*: any*/)
                    ]
                  },
                  (v3/*: any*/),
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/)
                ]
              },
              (v7/*: any*/)
            ]
          },
          (v6/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StarsQuery",
    "id": null,
    "text": "query StarsQuery(\n  $endCursor: String!\n) {\n  viewer {\n    starredRepositories(first: 5, after: $endCursor) {\n      nodes {\n        primaryLanguage {\n          name\n          id\n        }\n        description\n        name\n        url\n        createdAt\n        id\n      }\n      pageInfo {\n        endCursor\n        startCursor\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '92b02687940c0fec8549b8dcb005fc95';
module.exports = node;
