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
      unicodeNormalized: false,
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/search-fuzzy-text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.source` | `string` | The source text. |
| `options.target` | `string` | The target text. |
| `options.unicodeNormalized?` | `boolean` | Whether the text is unicode normalized. Default is false. |

#### Returns

`Promise`<{ `data`: `string`[]  } \| `undefined`\>

- A promise that resolves to
  an object with the fuzzy search result, or undefined if the response format
  is invalid.

#### Defined in

[search/fuzzy.ts:28](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/search/fuzzy.ts#L28)
