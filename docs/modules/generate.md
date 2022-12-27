[apyhub](../README.md) / [Exports](../modules.md) / generate

# Namespace: generate

## Table of contents

### Functions

- [archive](generate.md#archive)
- [barcode](generate.md#barcode)
- [charts](generate.md#charts)
- [ical](generate.md#ical)
- [pdf](generate.md#pdf)
- [qr](generate.md#qr)
- [screenshot](generate.md#screenshot)
- [thumbnail](generate.md#thumbnail)

## Functions

### archive

▸ **archive**(`params`): `Promise`<{ `data`: `string`  }\>

Creates an archive file (zip) from a list of files or URLs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the archive creation. |
| `params.input` | `string`[] \| `Buffer`[] | The list of files or URLs to archive. |
| `params.output?` | `string` | The desired file name for the output archive. |
| `params.password?` | `string` | The password to use for secure archiving. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object containing the resulting archive file or URL as a string.

#### Defined in

[generate/archive.ts:16](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/archive.ts#L16)

___

### barcode

▸ **barcode**(`params`): `Promise`<{ `data`: `string`  }\>

Generates a barcode image from a string of up to 80 characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the barcode generation. |
| `params.input` | `string` & { `maxLength`: ``80``  } | The string to generate the barcode from. |
| `params.output?` | `string` | The desired file name for the output barcode image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object containing the resulting barcode image file or URL as a string.

#### Defined in

[generate/barcode.ts:13](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/barcode.ts#L13)

___

### charts

▸ **charts**(`options`): `Promise`<{ `data`: `string`  }\>

Generates a chart image from data and chart options.

**`Example`**

```ts
const { charts } = require("apyhub");

const data = [
 { value: 10, label: "A" },
{ value: 20, label: "B" },
{ value: 30, label: "C" },
{ value: 40, label: "D" },
]

charts({
responseFormat: "file",
chartType: "bar",
output: "chart.png",
title: "My Chart",
theme: "light",
data,
}).then((res) => {
console.log(res);
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options object. |
| `options.chartType` | ``"bar"`` \| ``"pie"`` \| ``"stacked"`` | The type of chart to generate. Valid values are "bar", "pie" or "stacked". |
| `options.data` | { `label`: `string` ; `value`: `number`  }[] | The data to be used to generate the chart. |
| `options.output?` | `string` | The file path where the chart should be saved. This parameter is only used if responseFormat is "file". |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The format in which the chart should be returned. Valid values are "url" or "file". |
| `options.theme?` | ``"light"`` \| ``"dark"`` | The theme of the chart. Valid values are "light" or "dark". |
| `options.title?` | `string` | The title of the chart. |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves with the chart data if successful.

#### Defined in

[generate/charts.ts:37](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/charts.ts#L37)

___

### ical

▸ **ical**(`options`): `Promise`<{ `data`: `string`  }\>

Generates an iCalendar file or URL

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options object |
| `options.attendeesEmails` | `string`[] | An array of email addresses of attendees of the event |
| `options.description` | `string` | The description of the event |
| `options.endTime` | `string` | The end time of the event |
| `options.location?` | `string` | The location of the event |
| `options.meetingDate` | `string` | The date of the event |
| `options.organizerEmail` | `string` | The email address of the organizer of the event |
| `options.output?` | `string` | The name of the output file |
| `options.recurrence?` | `Object` | The recurrence options for the event |
| `options.recurrence.count` | `number` | - |
| `options.recurrence.frequency` | `string` | - |
| `options.recurring` | `boolean` | Whether the event is recurring or not |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format - either "file" or "url" |
| `options.startTime` | `string` | The start time of the event |
| `options.summary` | `string` | The summary of the event |
| `options.timeZone` | `string` | The time zone of the event |

#### Returns

`Promise`<{ `data`: `string`  }\>

A promise that resolves to an object with the data - either the file or URL depending on the response format

#### Defined in

[generate/ical.ts:25](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/ical.ts#L25)

___

### pdf

▸ **pdf**(`params`): `Promise`<{ `data`: `string`  }\>

Generates a PDF file from an HTML string or URL.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the PDF generation. |
| `params.input` | `string` | The HTML string or URL to generate the PDF from. |
| `params.landscape?` | `boolean` | Whether to generate the PDF in landscape orientation. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object containing the resulting PDF file or URL as a string.

#### Defined in

[generate/pdf.ts:13](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/pdf.ts#L13)

___

### qr

▸ **qr**(`params`): `Promise`<{ `data`: `string`  }\>

Generates a QR code image from a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the QR code generation. |
| `params.input` | `string` | The string to generate the QR code from. |
| `params.output?` | `string` | The desired file name for the output QR code image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object containing the resulting QR code image file or URL as a string.

#### Defined in

[generate/qr.ts:13](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/qr.ts#L13)

___

### screenshot

▸ **screenshot**(`params`): `Promise`<{ `data`: `string`  }\>

Takes a screenshot of a webpage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the screenshot generation. |
| `params.delay?` | `number` | The delay, in seconds, before taking the screenshot. |
| `params.input` | `string` | The URL of the webpage to take a screenshot of. |
| `params.output?` | `string` | The desired file name for the output screenshot image. |
| `params.quality?` | ``1`` \| ``2`` \| ``4`` \| ``5`` \| ``3`` | The quality of the screenshot image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object containing the resulting screenshot image file or URL as a string.

#### Defined in

[generate/screenshot.ts:15](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/screenshot.ts#L15)

___

### thumbnail

▸ **thumbnail**(`options`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Generates a thumbnail image from the given input and returns the thumbnail in the specified format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options object. |
| `options.height` | `number` | The desired height of the thumbnail image. |
| `options.input` | `string` \| `Buffer` | The input image as a file path or URL, or as a Buffer if it is a file. |
| `options.output?` | `string` | The file path where the thumbnail should be saved. This parameter is only used if responseFormat is "file". |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The format in which the thumbnail should be returned. Valid values are "url" or "file". |
| `options.width` | `number` | The desired width of the thumbnail image. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

A promise that resolves with the thumbnail data if successful, or undefined if an error occurred.

#### Defined in

[generate/thumbnail.ts:18](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/generate/thumbnail.ts#L18)
