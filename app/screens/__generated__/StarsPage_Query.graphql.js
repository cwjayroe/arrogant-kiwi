/**
 * @flow
 * @relayHash 03f05e8b4dba10209e955a50196334a1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StarsPage_starredRepos$ref = any;
export type StarsPage_QueryVariables = {||};
export type StarsPage_QueryResponse = {|
  +starredRepos: {|
    +$fragmentRefs: StarsPage_starredRepos$ref
  |}
|};
export type StarsPage_Query = {|
  variables: StarsPage_QueryVariables,
  response: StarsPage_QueryResponse,
|};
*/


/*
query StarsPage_Query {
  starredRepos: viewer {
    ...StarsPage_starredRepos
    id
  }
}

fragment StarsPage_starredRepos on User {
  starredRepositories(first: 5) {
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
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "StarsPage_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "starredRepos",
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "StarsPage_starredRepos",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "StarsPage_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "starredRepos",
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
            "storageKey": "starredRepositories(first:5)",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 5
              }
            ],
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
                      (v0/*: any*/),
                      (v1/*: any*/)
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
                  (v1/*: any*/)
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
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "StarsPage_Query",
    "id": null,
    "text": "query StarsPage_Query {\n  starredRepos: viewer {\n    ...StarsPage_starredRepos\n    id\n  }\n}\n\nfragment StarsPage_starredRepos on User {\n  starredRepositories(first: 5) {\n    nodes {\n      primaryLanguage {\n        name\n        id\n      }\n      description\n      name\n      url\n      createdAt\n      id\n    }\n    pageInfo {\n      endCursor\n      startCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '39a00dc5a8856ee6a46ecba767d768c0';
module.exports = node;
