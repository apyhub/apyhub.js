[apyhub](../README.md) / [Exports](../modules.md) / convert

# Namespace: convert

## Table of contents

### Functions

- [csvToExcel](convert.md#csvtoexcel)
- [htmlToPdf](convert.md#htmltopdf)
- [imageToPdf](convert.md#imagetopdf)
- [markdownToHtml](convert.md#markdowntohtml)
- [presentationToPdf](convert.md#presentationtopdf)
- [spreadsheetToPdf](convert.md#spreadsheettopdf)
- [wordToPdf](convert.md#wordtopdf)

## Functions

### csvToExcel

▸ **csvToExcel**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts a CSV file or URL to an Excel file.

**`Example`**

```ts
const { convert } = require("apy");

const csvToExcel = async () => {
 const response = await convert.csvToExcel({
   input: "https://apyhub.com/docs/assets/csv/sample.csv",
   responseFormat: "url",
  });
 };
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The CSV file or URL. |
| `params.output?` | `string` | The name for the output Excel file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format for the response. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves to the data for the output file or `undefined` if the response format is not "url".

#### Defined in

[convert/csvToExcel.ts:26](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/csvToExcel.ts#L26)

___

### htmlToPdf

▸ **htmlToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts an HTML file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apy");

const htmlToPdf = async () => {
  const response = await convert.htmlToPdf({
    input: "https://apyhub.com/docs/assets/html/sample.html",
    responseFormat: "url",
  });
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The HTML file or URL. |
| `params.output?` | `string` | The name for the output PDF file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format for the response. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves to the data for the output file or `undefined` if the response format is not "url".

#### Defined in

[convert/htmlToPdf.ts:27](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/htmlToPdf.ts#L27)

___

### imageToPdf

▸ **imageToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts an image file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apy");

const imageToPdf = async () => {
  const response = await convert.imageToPdf({
    input: "https://apyhub.com/docs/assets/images/sample.png",
    responseFormat: "url",
  });
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The image file or URL. |
| `params.output?` | `string` | The name for the output PDF file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format for the response. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves to the data for the output file or `undefined` if the response format is not "url".

#### Defined in

[convert/imageToPdf.ts:28](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/imageToPdf.ts#L28)

___

### markdownToHtml

▸ **markdownToHtml**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Convert markdown to HTML.

This function converts the given markdown input to HTML and returns the result.

**`Example`**

```ts
const { convert } = require("apy");

const markdownToHtml = async () => {
  const response = await convert.markdownToHtml({
    input: "# Hello World",
    responseFormat: "url",
  });
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The markdown input. |
| `params.output?` | `string` | The name of the output file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format of the response. Can be "url" or "file". |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with the HTML output.

#### Defined in

[convert/markdownToHtml.ts:30](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/markdownToHtml.ts#L30)

___

### presentationToPdf

▸ **presentationToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Convert a presentation to PDF.

This function converts the given presentation input to PDF and returns the result.

**`Example`**

```ts
const { convert } = require("apy");

const presentationToPdf = async () => {
  const response = await convert.presentationToPdf({
    input: "https://example.com/presentation.pptx",
    responseFormat: "url",
   });
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The presentation input. |
| `params.output?` | `string` | The name of the output file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format of the response. Can be "url" or "file". |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with the PDF output.

#### Defined in

[convert/presentationToPdf.ts:30](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/presentationToPdf.ts#L30)

___

### spreadsheetToPdf

▸ **spreadsheetToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts a spreadsheet file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apy");

const spreadsheetToPdf = async () => {
  const response = await convert.spreadsheetToPdf({
    input: "https://apyhub.com/docs/assets/spreadsheets/sample.xlsx",
    responseFormat: "url",
  });
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The file or URL to convert. |
| `params.output?` | `string` | The desired file name for the output PDF. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with the resulting PDF file or URL as a string, or undefined if the conversion failed.

#### Defined in

[convert/spreadsheetToPdf.ts:27](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/spreadsheetToPdf.ts#L27)

___

### wordToPdf

▸ **wordToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts a Word file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apy");

const wordToPdf = async () => {
  const response = await convert.wordToPdf({
   input: "https://apyhub.com/docs/assets/word/sample.docx",
   responseFormat: "url",
  });
};
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The file or URL to convert. |
| `params.output?` | `string` | The desired file name for the output PDF. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with the resulting PDF file or URL as a string, or undefined if the conversion failed.

#### Defined in

[convert/wordToPdf.ts:27](https://github.com/apyhub/apyhub.js/blob/63910fc/src/convert/wordToPdf.ts#L27)
