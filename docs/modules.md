[apyhub](README.md) / Exports

# apyhub

## Table of contents

### References

- [archive](modules.md#archive)
- [barcode](modules.md#barcode)
- [charts](modules.md#charts)
- [compress](modules.md#compress)
- [countries](modules.md#countries)
- [country](modules.md#country)
- [crop](modules.md#crop)
- [csvToExcel](modules.md#csvtoexcel)
- [currencyConverter](modules.md#currencyconverter)
- [currencyList](modules.md#currencylist)
- [email](modules.md#email)
- [fuzzy](modules.md#fuzzy)
- [htmlToPdf](modules.md#htmltopdf)
- [ical](modules.md#ical)
- [imageMetadata](modules.md#imagemetadata)
- [imageToPdf](modules.md#imagetopdf)
- [markdownToHtml](modules.md#markdowntohtml)
- [pdf](modules.md#pdf)
- [postcode](modules.md#postcode)
- [presentationToPdf](modules.md#presentationtopdf)
- [qr](modules.md#qr)
- [resize](modules.md#resize)
- [screenshot](modules.md#screenshot)
- [spreadsheetToPdf](modules.md#spreadsheettopdf)
- [textFromPdf](modules.md#textfrompdf)
- [textFromWebpage](modules.md#textfromwebpage)
- [textFromWord](modules.md#textfromword)
- [thumbnail](modules.md#thumbnail)
- [timezones](modules.md#timezones)
- [watermark](modules.md#watermark)
- [wordToPdf](modules.md#wordtopdf)

### Namespaces

- [convert](modules/convert.md)
- [data](modules/data.md)
- [extract](modules/extract.md)
- [generate](modules/generate.md)
- [imageProcessor](modules/imageProcessor.md)
- [search](modules/search.md)
- [validate](modules/validate.md)

### Functions

- [download](modules.md#download)
- [initApyhub](modules.md#initapyhub)

## References

### archive

Re-exports [archive](modules/generate.md#archive)

___

### barcode

Re-exports [barcode](modules/generate.md#barcode)

___

### charts

Re-exports [charts](modules/generate.md#charts)

___

### compress

Re-exports [compress](modules/imageProcessor.md#compress)

___

### countries

Re-exports [countries](modules/data.md#countries)

___

### country

Re-exports [country](modules/data.md#country)

___

### crop

Re-exports [crop](modules/imageProcessor.md#crop)

___

### csvToExcel

Re-exports [csvToExcel](modules/convert.md#csvtoexcel)

___

### currencyConverter

Re-exports [currencyConverter](modules/data.md#currencyconverter)

___

### currencyList

Re-exports [currencyList](modules/data.md#currencylist)

___

### email

Re-exports [email](modules/validate.md#email)

___

### fuzzy

Re-exports [fuzzy](modules/search.md#fuzzy)

___

### htmlToPdf

Re-exports [htmlToPdf](modules/convert.md#htmltopdf)

___

### ical

Re-exports [ical](modules/generate.md#ical)

___

### imageMetadata

Re-exports [imageMetadata](modules/extract.md#imagemetadata)

___

### imageToPdf

Re-exports [imageToPdf](modules/convert.md#imagetopdf)

___

### markdownToHtml

Re-exports [markdownToHtml](modules/convert.md#markdowntohtml)

___

### pdf

Re-exports [pdf](modules/generate.md#pdf)

___

### postcode

Re-exports [postcode](modules/validate.md#postcode)

___

### presentationToPdf

Re-exports [presentationToPdf](modules/convert.md#presentationtopdf)

___

### qr

Re-exports [qr](modules/generate.md#qr)

___

### resize

Re-exports [resize](modules/imageProcessor.md#resize)

___

### screenshot

Re-exports [screenshot](modules/generate.md#screenshot)

___

### spreadsheetToPdf

Re-exports [spreadsheetToPdf](modules/convert.md#spreadsheettopdf)

___

### textFromPdf

Re-exports [textFromPdf](modules/extract.md#textfrompdf)

___

### textFromWebpage

Re-exports [textFromWebpage](modules/extract.md#textfromwebpage)

___

### textFromWord

Re-exports [textFromWord](modules/extract.md#textfromword)

___

### thumbnail

Re-exports [thumbnail](modules/generate.md#thumbnail)

___

### timezones

Re-exports [timezones](modules/data.md#timezones)

___

### watermark

Re-exports [watermark](modules/imageProcessor.md#watermark)

___

### wordToPdf

Re-exports [wordToPdf](modules/convert.md#wordtopdf)

## Functions

### download

▸ **download**(`data`, `filePath`): `Promise`<`void`\>

Downloads data to the specified file path.

**`Throws`**

If the data is invalid or there is an error writing the file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data to download. Can be a Blob, a string, or an object with a `data` property and optionally a `type` property and an `arrayBuffer` function that returns a Promise for an ArrayBuffer. |
| `filePath` | `string` | The file path to save the downloaded data to. |

#### Returns

`Promise`<`void`\>

A Promise that resolves when the download is
  complete.

#### Defined in

[utils/download.ts:38](https://github.com/apyhub/apyhub.js/blob/334efcb/src/utils/download.ts#L38)

___

### initApyhub

▸ **initApyhub**(`apyToken`, `options?`): `void`

Initializes the Apyhub API client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `apyToken` | `string` \| { `password`: `string` ; `username`: `string`  } | The Apyhub API token or Basic Authorization credentials. |
| `options?` | `Object` | Options for the API client. |
| `options.debug` | `boolean` | - |
| `options.rateLimit` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` | The rate limit for the API client. |

#### Returns

`void`

#### Defined in

[ApyClient.ts:215](https://github.com/apyhub/apyhub.js/blob/334efcb/src/ApyClient.ts#L215)
