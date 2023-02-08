[apyhub](../README.md) / [Exports](../modules.md) / extract

# Namespace: extract

## Table of contents

### Functions

- [imageMetadata](extract.md#imagemetadata)
- [textFromPdf](extract.md#textfrompdf)
- [textFromWebpage](extract.md#textfromwebpage)
- [textFromWord](extract.md#textfromword)
- [unarchive](extract.md#unarchive)

## Functions

### imageMetadata

▸ **imageMetadata**(`image`): `Promise`<{ `data`: `string`  }\>

Extracts metadata from an image.

**`Example`**

```ts
const { extract } = require("apyhub");

  const imageMetadata = async () => {
    const data = await extract.imageMetadata(
      "https://assets.apyhub.com/samples/sample.jpg"
    );
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/image-processor-extract-metadata

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `string` \| `Buffer` | The image file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the metadata
  for the image.

#### Defined in

[extract/imageMetadata.ts:24](https://github.com/apyhub/apyhub.js/blob/76ddcf8/src/extract/imageMetadata.ts#L24)

___

### textFromPdf

▸ **textFromPdf**(`pdf`): `Promise`<{ `data`: `string`  }\>

Extracts text from a PDF file.

**`Example`**

```ts
const { extract } = require("apyhub");

  const textFromPdf = async () => {
    const data = await extract.textFromPdf(
      "https://assets.apyhub.com/samples/sample.pdf"
    );
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/extractor-pdf-text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pdf` | `string` \| `Buffer` | The PDF file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for
  the PDF.

#### Defined in

[extract/textFromPdf.ts:24](https://github.com/apyhub/apyhub.js/blob/76ddcf8/src/extract/textFromPdf.ts#L24)

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

**`Link`**

https://apyhub.com/utility/extractor-webpage-text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the webpage. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for
  the webpage.

#### Defined in

[extract/textFromWebpage.ts:20](https://github.com/apyhub/apyhub.js/blob/76ddcf8/src/extract/textFromWebpage.ts#L20)

___

### textFromWord

▸ **textFromWord**(`word`): `Promise`<{ `data`: `string`  }\>

Extracts text from a Word document.

**`Example`**

```ts
const { extract } = require("apyhub");

  const textFromWord = async () => {
    const data = await extract.textFromWord(
      "https://assets.apyhub.com/samples/sample.docx"
    );
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/extractor-word-text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `word` | `string` \| `Buffer` | The Word document file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for
  the Word document.

#### Defined in

[extract/textFromWord.ts:24](https://github.com/apyhub/apyhub.js/blob/76ddcf8/src/extract/textFromWord.ts#L24)

___

### unarchive

▸ **unarchive**(`params`): `Promise`<{ `data`: `Buffer`  }\>

Extracts the contents of an archive file (zip) to a list of files or URLs.

**`Example`**

```ts
const { extract } = require("apyhub");

const unarchive = async () => {
 const data = await extract.unarchive({
  input: "https://assets.apyhub.com/samples/sample.zip",
});
return data;
};
```

**`Link`**

https://apyhub.com/utility/extract-file-unarchive

**`Link`**

https://apyhub.com/utility/extract-file-secure-unarchive

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the archive extraction. |
| `params.input` | `string` \| `Buffer` | The archive file or URL to extract. |
| `params.password?` | `string` | The password to use for secure extraction. |

#### Returns

`Promise`<{ `data`: `Buffer`  }\>

- A promise that resolves with an object containing the resulting extracted files or URLs as a Buffer.

#### Defined in

[extract/unarchive.ts:28](https://github.com/apyhub/apyhub.js/blob/76ddcf8/src/extract/unarchive.ts#L28)
