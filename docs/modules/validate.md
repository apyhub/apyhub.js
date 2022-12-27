[apyhub](../README.md) / [Exports](../modules.md) / validate

# Namespace: validate

## Table of contents

### Functions

- [email](validate.md#email)
- [postcode](validate.md#postcode)
- [vat](validate.md#vat)

## Functions

### email

▸ **email**(`options`): `Promise`<{ `data`: `boolean`  }\>

Validates an email address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.checkType` | ``"dns"`` \| ``"academic"`` | The type of validation to perform. Can be either "dns" or "academic". |
| `options.email` | `string` | The email address to validate. |

#### Returns

`Promise`<{ `data`: `boolean`  }\>

- A promise that resolves to an object with the validation result.

#### Defined in

[validate/email.ts:12](https://github.com/apyhub/apyhub.js/blob/63910fc/src/validate/email.ts#L12)

___

### postcode

▸ **postcode**(`options`): `Promise`<{ `data`: `boolean`  }\>

Validates a postcode.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | The options for the function. |
| `options.countryCode` | ``"in"`` \| ``"uk"`` | The country code of the postcode. Can be either "in" or "uk". |
| `options.postcode` | `string` | The postcode to validate. |

#### Returns

`Promise`<{ `data`: `boolean`  }\>

- A promise that resolves to an object with the validation result.

#### Defined in

[validate/postcode.ts:13](https://github.com/apyhub/apyhub.js/blob/63910fc/src/validate/postcode.ts#L13)

___

### vat

▸ **vat**(`vat`): `Promise`<{ `data`: `boolean`  }\>

Validates a VAT number.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vat` | `string` |

#### Returns

`Promise`<{ `data`: `boolean`  }\>

- A promise that resolves to an object with the validation result.

#### Defined in

[validate/vat.ts:12](https://github.com/apyhub/apyhub.js/blob/63910fc/src/validate/vat.ts#L12)
