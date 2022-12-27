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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `image` | `string` \| `Buffer` | The image file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the metadata for the image.

#### Defined in

[extract/imageMetadata.ts:12](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/extract/imageMetadata.ts#L12)

___

### textFromPdf

▸ **textFromPdf**(`pdf`): `Promise`<{ `data`: `string`  }\>

Extracts text from a PDF file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pdf` | `string` \| `Buffer` | The PDF file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for the PDF.

#### Defined in

[extract/textFromPdf.ts:12](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/extract/textFromPdf.ts#L12)

___

### textFromWebpage

▸ **textFromWebpage**(`url`): `Promise`<{ `data`: `string`  }\>

Extracts text from a webpage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the webpage. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for the webpage.

#### Defined in

[extract/textFromWebpage.ts:10](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/extract/textFromWebpage.ts#L10)

___

### textFromWord

▸ **textFromWord**(`word`): `Promise`<{ `data`: `string`  }\>

Extracts text from a Word document.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `word` | `string` \| `Buffer` | The Word document file or URL. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to the text for the Word document.

#### Defined in

[extract/textFromWord.ts:12](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/extract/textFromWord.ts#L12)
