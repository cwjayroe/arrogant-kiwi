/**
 * @flow
 * @relayHash eb99142f2ba6c7ad4414f7d66804fa44
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RelayQueryVariables = {||};
export type RelayQueryResponse = {|
  +viewer: {|
    +repositories: {|
      +nodes: ?$ReadOnlyArray<?{|
        +name: string,
        +description: ?string,
        +url: any,
        +pushedAt: ?any,
        +primaryLanguage: ?{|
          +name: string
        |},
      |}>
    |}
  |}
|};
export type RelayQuery = {|
  variables: RelayQueryVariables,
  response: RelayQueryResponse,
|};
*/


/*
query RelayQuery {
  viewer {
    repositories(first: 10, ownerAffiliations: OWNER) {
      nodes {
        name
        description
        url
        pushedAt
        primaryLanguage {
          name
          id
        }
        id
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "ownerAffiliations",
    "value": "OWNER"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "pushedAt",
  "args": null,
  "storageKey": null
},
v5 = {
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
    "name": "RelayQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
            "name": "repositories",
            "storageKey": "repositories(first:10,ownerAffiliations:\"OWNER\")",
            "args": (v0/*: any*/),
            "concreteType": "RepositoryConnection",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "primaryLanguage",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Language",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RelayQuery",
    "argumentDefinitions": [],
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
            "name": "repositories",
            "storageKey": "repositories(first:10,ownerAffiliations:\"OWNER\")",
            "args": (v0/*: any*/),
            "concreteType": "RepositoryConnection",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "primaryLanguage",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Language",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v5/*: any*/)
                    ]
                  },
                  (v5/*: any*/)
                ]
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RelayQuery",
    "id": null,
    "text": "query RelayQuery {\n  viewer {\n    repositories(first: 10, ownerAffiliations: OWNER) {\n      nodes {\n        name\n        description\n        url\n        pushedAt\n        primaryLanguage {\n          name\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2ad48b6f772b2c30ee5e93177cfdd979';
module.exports = node;
