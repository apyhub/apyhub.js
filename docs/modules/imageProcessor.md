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

▸ **compress**(`options`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Compresses an image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.input` | `string` | The input image as a file path or URL, or as a Buffer if it is a file. |
| `options.output?` | `string` | The desired file name for the output image. Default is "output.png". |
| `options.quality` | `number` | The desired quality of the output image. Must be a number between 1 and 99. |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. Can be either "url" or "file". |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves to an object with the compressed image as a URL or file, or undefined if the response format is invalid.

#### Defined in

[imageProcessor/compress.ts:18](https://github.com/apyhub/apyhub.js/blob/2905159/src/imageProcessor/compress.ts#L18)

___

### crop

▸ **crop**(`options`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Crops an image.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.height` | `number` | The desired height of the output image. |
| `options.input` | `string` | The input image as a file path or URL, or as a Buffer if it is a file. |
| `options.output?` | `string` | The desired file name for the output image. Default is "output.png". |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. Can be either "url" or "file". |
| `options.width` | `number` | The desired width of the output image. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves to an object with the cropped image as a URL or file, or undefined if the response format is invalid.

#### Defined in

[imageProcessor/crop.ts:20](https://github.com/apyhub/apyhub.js/blob/2905159/src/imageProcessor/crop.ts#L20)

___

### resize

▸ **resize**(`options`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Resizes an image.

**`Example`**

```ts

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.height` | `number` | The desired height of the output image. |
| `options.input` | `string` | The input image as a file path or URL, or as a Buffer if it is a file. |
| `options.output?` | `string` | The desired file name for the output image. Default is "output.png". |
| `options.responseFormat` | ``"file"`` \| ``"url"`` | The desired response format. Can be either "url" or "file". |
| `options.width` | `number` | The desired width of the output image. |

#### Returns

`Promise`<{ `data`: `string`  } \| `undefined`\>

- A promise that resolves to an object with the resized image as a URL or file, or undefined if the response format is invalid.

#### Defined in

[imageProcessor/resize.ts:21](https://github.com/apyhub/apyhub.js/blob/2905159/src/imageProcessor/resize.ts#L21)

___

### watermark

▸ **watermark**(`options`): `Promise`<{ `data`: `string`  } \| `undefined`\>

Adds a watermark to an image.

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

- A promise that resolves to an object with the watermarked image as a URL or file, or undefined if the response format is invalid.

#### Defined in

[imageProcessor/watermark.ts:20](https://github.com/apyhub/apyhub.js/blob/2905159/src/imageProcessor/watermark.ts#L20)
