[apyhub](../README.md) / [Exports](../modules.md) / imageProcessor

# Namespace: imageProcessor

## Table of contents

### Functions

- [compress](imageProcessor.md#compress)
- [crop](imageProcessor.md#crop)
- [resize](imageProcessor.md#resize)
- [watermark](imageProcessor.md#watermark)

## Functions

### compress

▸ **compress**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Compresses an image file or URL.

**`Example`**

```ts
const { imageProcessor } = require("apyhub");

  const compress = async () => {
    const data = await imageProcessor.compress({
      responseFormat: "url",
      input: "https://assets.apyhub.com/samples/sample.png",
      quality: 50,
      output: "compressed.png",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/image-processor-compress

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the image compression. |
| `params.input` | `string` \| `Buffer` | The image file or URL to compress. |
| `params.output?` | `string` | The desired file name for the output compressed image. |
| `params.quality` | `number` | The desired quality of the compressed image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with an object
  containing the resulting compressed image file or URL as a string.

#### Defined in

[imageProcessor/compress.ts:34](https://github.com/apyhub/apyhub.js/blob/16344fa/src/imageProcessor/compress.ts#L34)

___

### crop

▸ **crop**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Crops an image file or URL.

**`Example`**

```ts
const { imageProcessor } = require("apyhub");

  const crop = async () => {
    const data = await imageProcessor.crop({
      responseFormat: "url",
      input: "https://assets.apyhub.com/samples/sample.pdf",
      height: 200,
      width: 200,
      output: "output.png",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/image-processor-crop

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the image cropping. |
| `params.height` | `number` | The desired height of the cropped image. |
| `params.input` | `string` \| `Buffer` | The image file or URL to crop. |
| `params.output?` | `string` | The desired file name for the output cropped image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |
| `params.width` | `number` | The desired width of the cropped image. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with an object
  containing the resulting cropped image file or URL as a string.

#### Defined in

[imageProcessor/crop.ts:37](https://github.com/apyhub/apyhub.js/blob/16344fa/src/imageProcessor/crop.ts#L37)

___

### resize

▸ **resize**(`params`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Resizes an image file or URL.

**`Example`**

```ts
const { imageProcessor } = require("apyhub");

  const resize = async () => {
    const data = await imageProcessor.resize({
      responseFormat: "url",
      input: "https://assets.apyhub.com/samples/sample.pdf",
      height: 200,
      width: 200,
      output: "output.png",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/image-processor-resize

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the image resizing. |
| `params.height` | `number` | The desired height of the resized image. |
| `params.input` | `string` \| `Buffer` | The image file or URL to resize. |
| `params.output?` | `string` | The desired file name for the output resized image. |
| `params.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. |
| `params.width` | `number` | The desired width of the resized image. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves with an object
  containing the resulting resized image file or URL as a string.

#### Defined in

[imageProcessor/resize.ts:37](https://github.com/apyhub/apyhub.js/blob/16344fa/src/imageProcessor/resize.ts#L37)

___

### watermark

▸ **watermark**(`options`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Adds a watermark to an image.

**`Example`**

```ts
const { imageProcessor } = require("apyhub");

  const watermark = async () => {
    const data = await imageProcessor.watermark({
      input: "https://assets.apyhub.com/samples/sample.pdf",
      watermark: "https://assets.apyhub.com/samples/sample.pdf",
      responseFormat: "url",
      output: "output.png",
    });
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/image-processor-watermark

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.input` | `string` \| `Buffer` | The input image as a file path or URL, or as a Buffer if it is a file. |
| `options.output?` | `string` | The desired file name for the output image. Default is "output.png". |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. Can be either "url" or "file". |
| `options.watermark` | `string` \| `Buffer` | The watermark image as a file path or URL, or as a Buffer if it is a file. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves to
  an object with the watermarked image as a URL or file, or undefined if the
  response format is invalid.

#### Defined in

[imageProcessor/watermark.ts:40](https://github.com/apyhub/apyhub.js/blob/16344fa/src/imageProcessor/watermark.ts#L40)
