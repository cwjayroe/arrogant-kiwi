/**
 * @flow
 * @relayHash c8d42de000ef1c074fe840afa274c2a0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RepoDetailsQueryVariables = {|
  repoName: string
|};
export type RepoDetailsQueryResponse = {|
  +viewer: {|
    +repository: ?{|
      +id: string,
      +name: string,
      +createdAt: any,
      +pushedAt: ?any,
      +url: any,
    |}
  |}
|};
export type RepoDetailsQuery = {|
  variables: RepoDetailsQueryVariables,
  response: RepoDetailsQueryResponse,
|};
*/


/*
query RepoDetailsQuery(
  $repoName: String!
) {
  viewer {
    repository(name: $repoName) {
      id
      name
      createdAt
      pushedAt
      url
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "repoName",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "repository",
  "storageKey": null,
  "args": [
    {
      "kind": "Variable",
      "name": "name",
      "variableName": "repoName"
    }
  ],
  "concreteType": "Repository",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
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
      "name": "pushedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "RepoDetailsQuery",
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
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RepoDetailsQuery",
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
          (v2/*: any*/),
          (v1/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "RepoDetailsQuery",
    "id": null,
    "text": "query RepoDetailsQuery(\n  $repoName: String!\n) {\n  viewer {\n    repository(name: $repoName) {\n      id\n      name\n      createdAt\n      pushedAt\n      url\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5edb7fa0ec3d2b850d59df844d397370';
module.exports = node;
