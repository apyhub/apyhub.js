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

**`Example`**

```ts
const { generate } = require("apyhub");

  const archive = async () => {
    const data = await generate.archive({
      responseFormat: "url",
      input: [
        "https://assets.apyhub.com/samples/sample.pdf",
        "https://assets.apyhub.com/samples/sample.xlsx",
      ],
    });
    return data;
  };
```

**`Example`**

```ts
const { generate } = require("apyhub");

  const secureArchive = async () => {
    const data = await generate.archive({
      responseFormat: "url",
      input: [
        "https://assets.apyhub.com/samples/sample.pdf",
        "https://assets.apyhub.com/samples/sample.xlsx",
      ],
      password: "password",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/generate-file-archive

**`Link`**

https://apyhub.com/utility/generate-secure-file-archive

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

- A promise that resolves with an object
  containing the resulting archive file or URL as a string.

#### Defined in

[generate/archive.ts:51](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/archive.ts#L51)

___

### barcode

▸ **barcode**(`params`): `Promise`<{ `data`: `string`  }\>

Generates a barcode image from a string of up to 80 characters.

**`Example`**

```ts
const { generate } = require("apyhub");

  const barcode = async () => {
    const data = await generate.barcode({
      responseFormat: "url",
      input: "https://apyhub.com",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/generate-bar-code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the barcode generation. |
| `params.input` | `string` & { `maxLength`: ``80``  } | The string to generate the barcode from. |
| `params.output?` | `string` | The desired file name for the output barcode image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object
  containing the resulting barcode image file or URL as a string.

#### Defined in

[generate/barcode.ts:29](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/barcode.ts#L29)

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
  ];

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

**`Link`**

https://apyhub.com/utility/pie-chart

**`Link`**

https://apyhub.com/utility/stacked-graph

**`Link`**

https://apyhub.com/utility/bar-graph

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

A promise that resolves with the chart
  data if successful.

#### Defined in

[generate/charts.ts:47](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/charts.ts#L47)

___

### ical

▸ **ical**(`params`): `Promise`<{ `data`: `string`  }\>

Generates an iCalendar file from a list of parameters.

**`Example`**

```ts
const { generate } = require("apyhub");

  const ical = async () => {
  const data = await generate.ical({
  responseFormat: "url",
  summary: "Meeting",
  description: "Meeting description",
  organizerEmail: "your@mail.com",
  attendeesEmails: ["john@mail.com", "sally@mail.com"],
  timeZone: "America/New_York",
  startTime: "10:00",
  endTime: "11:00",
  meetingDate: "2020-01-01",
  recurring: true,
  recurrence: {
  frequency: "WEEKLY",
  count: 5,
  },
  });
  return data;
```

**`Link`**

https://apyhub.com/utility/generator-ical

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the iCalendar file generation. |
| `params.attendeesEmails` | `string`[] | The meeting attendees' email addresses. |
| `params.description` | `string` | The meeting description. |
| `params.endTime` | `string` | The meeting end time. |
| `params.location?` | `string` | The meeting location. |
| `params.meetingDate` | `string` | The meeting date. |
| `params.organizerEmail` | `string` | The meeting organizer's email address. |
| `params.output?` | `string` | - |
| `params.recurrence?` | `Object` | The meeting recurrence parameters. |
| `params.recurrence.count` | `number` | - |
| `params.recurrence.frequency` | `string` | - |
| `params.recurring?` | `boolean` | Whether the meeting is recurring. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |
| `params.startTime` | `string` | The meeting start time. |
| `params.summary` | `string` | The meeting summary. |
| `params.timeZone` | `string` | The meeting time zone. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object
  containing the resulting iCalendar file or URL as a string.

#### Defined in

[generate/ical.ts:51](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/ical.ts#L51)

___

### pdf

▸ **pdf**(`params`): `Promise`<{ `data`: `string`  }\>

Generates a PDF file from an HTML string or URL.

**`Example`**

```ts
const { generate } = require("apyhub");

  const pdf = async () => {
    const data = await generate.pdf({
      responseFormat: "url",
      input: "https://apyhub.com",
      landscape: true,
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/generate-url-pdf

**`Link`**

https://apyhub.com/utility/generate-html-pdf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the PDF generation. |
| `params.input` | `string` | The HTML string or URL to generate the PDF from. |
| `params.landscape?` | `boolean` | Whether to generate the PDF in landscape orientation. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object
  containing the resulting PDF file or URL as a string.

#### Defined in

[generate/pdf.ts:31](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/pdf.ts#L31)

___

### qr

▸ **qr**(`params`): `Promise`<{ `data`: `string`  }\>

Generates a QR code image from a string.

**`Example`**

```ts
const { generate } = require("apyhub");

  const qr = async () => {
    const data = await generate.qr({
      responseFormat: "url",
      input: "https://apyhub.com",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/generate-qr-code

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the QR code generation. |
| `params.input` | `string` | The string to generate the QR code from. |
| `params.output?` | `string` | The desired file name for the output QR code image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object
  containing the resulting QR code image file or URL as a string.

#### Defined in

[generate/qr.ts:28](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/qr.ts#L28)

___

### screenshot

▸ **screenshot**(`params`): `Promise`<{ `data`: `string`  }\>

Takes a screenshot of a webpage.

**`Example`**

```ts
const { generate } = require("apyhub");

  const screenshot = async () => {
    const data = await generate.screenshot({
      responseFormat: "url",
      input: "https://apyhub.com",
      delay: 5,
      quality: 3,
      output: "screenshot.png",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/generate-webpage-screenshot

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the screenshot generation. |
| `params.delay?` | `number` | The delay, in seconds, before taking the screenshot. |
| `params.input` | `string` | The URL of the webpage to take a screenshot of. |
| `params.output?` | `string` | The desired file name for the output screenshot image. |
| `params.quality?` | ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` | The quality of the screenshot image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  }\>

- A promise that resolves with an object
  containing the resulting screenshot image file or URL as a string.

#### Defined in

[generate/screenshot.ts:36](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/screenshot.ts#L36)

___

### thumbnail

▸ **thumbnail**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Creates a thumbnail image from a file or URL.

**`Example`**

```ts
const { generate } = require("apyhub");

  const thumbnail = async () => {
    const data = await generate.thumbnail({
      responseFormat: "url",
      input: "https://assets.apyhub.com/samples/sample.pdf",
      width: 200,
      height: 200,
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/image-processor-thumbnail

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the thumbnail creation. |
| `params.height` | `number` | The desired height of the thumbnail. |
| `params.input` | `string` \| `Buffer` | The file or URL to create a thumbnail from. |
| `params.output?` | `string` | The desired file name for the output thumbnail. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |
| `params.width` | `number` | The desired width of the thumbnail. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with an object
  containing the resulting thumbnail file or URL as a string.

#### Defined in

[generate/thumbnail.ts:35](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/generate/thumbnail.ts#L35)
