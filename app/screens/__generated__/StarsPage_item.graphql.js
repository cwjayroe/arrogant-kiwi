/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type StarsPage_item$ref: FragmentReference;
declare export opaque type StarsPage_item$fragmentType: StarsPage_item$ref;
export type StarsPage_item = {|
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
  +$refType: StarsPage_item$ref,
|};
export type StarsPage_item$data = StarsPage_item;
export type StarsPage_item$key = {
  +$data?: StarsPage_item$data,
  +$fragmentRefs: StarsPage_item$ref,
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
  "name": "StarsPage_item",
  "type": "StarredRepositoryConnection",
  "metadata": null,
  "argumentDefinitions": [],
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '69b152e43dcccb18d233c12abf42a4fc';
module.exports = node;
