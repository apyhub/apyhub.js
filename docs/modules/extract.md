[apyhub](../README.md) / [Exports](../modules.md) / extract

# Namespace: extract

## Table of contents

### Functions

- [imageMetadata](extract.md#imagemetadata)
- [textFromPdf](extract.md#textfrompdf)
- [textFromWebpage](extract.md#textfromwebpage)
- [textFromWord](extract.md#textfromword)

## Functions

### imageMetadata

▸ **imageMetadata**(`image`): `Promise`<{ `data`: `string`  }\>

Extracts metadata from an image.

**`Example`**

```ts
const { extract } = require("apyhub");

const imageMetadata = async () => {
  const data = await extract.imageMetadata("https://assets.apyhub.com/samples/sample.jpg");
  return data;
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `string` \| `Buffer` | The image file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the metadata for the image.

#### Defined in

[extract/imageMetadata.ts:21](https://github.com/apyhub/apyhub.js/blob/84a06ba/src/extract/imageMetadata.ts#L21)

___

### textFromPdf

▸ **textFromPdf**(`pdf`): `Promise`<{ `data`: `string`  }\>

Extracts text from a PDF file.

**`Example`**

```ts
const { extract } = require("apyhub");

const textFromPdf = async () => {
  const data = await extract.textFromPdf("https://assets.apyhub.com/samples/sample.pdf");
  return data;
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pdf` | `string` \| `Buffer` | The PDF file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for the PDF.

#### Defined in

[extract/textFromPdf.ts:21](https://github.com/apyhub/apyhub.js/blob/84a06ba/src/extract/textFromPdf.ts#L21)

___

### textFromWebpage

▸ **textFromWebpage**(`url`): `Promise`<{ `data`: `string`  }\>

Extracts text from a webpage.

**`Example`**

```ts
const { extract } = require("apyhub");

const textFromWebpage = async () => {
  const data = await extract.textFromWebpage("https://www.apyhub.com");
  return data;
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the webpage. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for the webpage.

#### Defined in

[extract/textFromWebpage.ts:19](https://github.com/apyhub/apyhub.js/blob/84a06ba/src/extract/textFromWebpage.ts#L19)

___

### textFromWord

▸ **textFromWord**(`word`): `Promise`<{ `data`: `string`  }\>

Extracts text from a Word document.

**`Example`**

```ts
const { extract } = require("apyhub");

const textFromWord = async () => {
  const data = await extract.textFromWord("https://assets.apyhub.com/samples/sample.docx");
  return data;
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `word` | `string` \| `Buffer` | The Word document file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for the Word document.

#### Defined in

[extract/textFromWord.ts:21](https://github.com/apyhub/apyhub.js/blob/84a06ba/src/extract/textFromWord.ts#L21)
