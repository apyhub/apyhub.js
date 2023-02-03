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
const { convert } = require("apyhub");

  const csvToExcel = async () => {
    const data = await convert.csvToExcel({
      input: "https://assets.apyhub.com/samples/sample.csv",
      responseFormat: "url",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/converter-csv-excel

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The CSV file or URL. |
| `params.output?` | `string` | The name for the output Excel file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format for the response. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves to
  the data for the output file or `undefined` if the response format is not
  "url".

#### Defined in

[convert/csvToExcel.ts:31](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/csvToExcel.ts#L31)

___

### htmlToPdf

▸ **htmlToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts an HTML file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apyhub");

  const htmlToPdf = async () => {
    const data = await convert.htmlToPdf({
      input: "https://assets.apyhub.com/samples/sample.html",
      responseFormat: "url",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/converter-html-pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The HTML file or URL. |
| `params.output?` | `string` | The name for the output PDF file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format for the response. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves to
  the data for the output file or `undefined` if the response format is not
  "url".

#### Defined in

[convert/htmlToPdf.ts:31](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/htmlToPdf.ts#L31)

___

### imageToPdf

▸ **imageToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts an image file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apyhub");

  const imageToPdf = async () => {
    const data = await convert.imageToPdf({
      input: "https://assets.apyhub.com/samples/sample.jpg",
      responseFormat: "url",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/converter-image-pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The image file or URL. |
| `params.output?` | `string` | The name for the output PDF file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format for the response. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves to
  the data for the output file or `undefined` if the response format is not
  "url".

#### Defined in

[convert/imageToPdf.ts:31](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/imageToPdf.ts#L31)

___

### markdownToHtml

▸ **markdownToHtml**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Convert markdown to HTML.

This function converts the given markdown input to HTML and returns the
result.

**`Example`**

```ts
const { convert } = require("apyhub");

  const markdownToHtml = async () => {
    const data = await convert.markdownToHtml({
      input: "# Hello World",
      responseFormat: "url",
    });
  };
```

**`Link`**

https://apyhub.com/utility/converter-md-html

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The markdown input. |
| `params.output?` | `string` | The name of the output file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format of the response. Can be "url" or "file". |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves
  with the HTML output.

#### Defined in

[convert/markdownToHtml.ts:33](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/markdownToHtml.ts#L33)

___

### presentationToPdf

▸ **presentationToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Convert a presentation to PDF.

This function converts the given presentation input to PDF and returns the
result.

**`Example`**

```ts
const { convert } = require("apyhub");

  const presentationToPdf = async () => {
    const data = await convert.presentationToPdf({
      input: "https://assets.apyhub.com/samples/sample.pptx",
      responseFormat: "url",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/converter-presentation-pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The presentation input. |
| `params.output?` | `string` | The name of the output file. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The format of the response. Can be "url" or "file". |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves
  with the PDF output.

#### Defined in

[convert/presentationToPdf.ts:34](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/presentationToPdf.ts#L34)

___

### spreadsheetToPdf

▸ **spreadsheetToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts a spreadsheet file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apyhub");

  const spreadsheetToPdf = async () => {
    const data = await convert.spreadsheetToPdf({
      input: "https://assets.apyhub.com/samples/sample.xlsx",
      responseFormat: "url",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/converter-spreadsheet-pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The file or URL to convert. |
| `params.output?` | `string` | The desired file name for the output PDF. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves
  with the resulting PDF file or URL as a string, or undefined if the
  conversion failed.

#### Defined in

[convert/spreadsheetToPdf.ts:31](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/spreadsheetToPdf.ts#L31)

___

### wordToPdf

▸ **wordToPdf**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Converts a Word file or URL to a PDF file.

**`Example`**

```ts
const { convert } = require("apyhub");

  const wordToPdf = async () => {
    const data = await convert.wordToPdf({
      input: "https://assets.apyhub.com/samples/sample.docx",
      responseFormat: "url",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/converter-doc-pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.input` | `string` \| `Buffer` | The file or URL to convert. |
| `params.output?` | `string` | The desired file name for the output PDF. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves
  with the resulting PDF file or URL as a string, or undefined if the
  conversion failed.

#### Defined in

[convert/wordToPdf.ts:31](https://github.com/apyhub/apyhub.js/blob/334efcb/src/convert/wordToPdf.ts#L31)
