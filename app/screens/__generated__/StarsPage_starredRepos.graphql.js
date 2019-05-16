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
  "metadata": null,
  "argumentDefinitions": [],
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
(node/*: any*/).hash = '714009ba54c7126d6c4e777dab941f54';
module.exports = node;
