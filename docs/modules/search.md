[apyhub](../README.md) / [Exports](../modules.md) / search

# Namespace: search

## Table of contents

### Functions

- [fuzzy](search.md#fuzzy)

## Functions

### fuzzy

▸ **fuzzy**(`options`): `Promise`<{ `data`: `string`[]  } \| `undefined`\>

Fuzzy search.

**`Example`**

```ts
const { search } = require("apyhub");

const fuzzy = async () => {
   const data = await search.fuzzy({
   source: "taching",
   target: "teaching is the best qualifying compare another profession",
   unicodeNormalized: false
 });
return data;
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.source` | `string` | The source text. |
| `options.target` | `string` | The target text. |
| `options.unicodeNormalized?` | `boolean` | Whether the text is unicode normalized. Default is false. |

#### Returns

`Promise`<{ `data`: `string`[]  } \| `undefined`\>

- A promise that resolves to an object with the fuzzy search result, or undefined if the response format is invalid.

#### Defined in

[search/fuzzy.ts:24](https://github.com/apyhub/apyhub.js/blob/d3e6ff5/src/search/fuzzy.ts#L24)
