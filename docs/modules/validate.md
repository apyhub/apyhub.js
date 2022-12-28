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

**`Example`**

```ts
const { validate } = require("apyhub");

const email = async () => {
  const data = await validate.email({
     email: "hello@apyhub.com",
     checkType: "dns"
   });
  return data;
};
```

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

[validate/email.ts:24](https://github.com/apyhub/apyhub.js/blob/d3e6ff5/src/validate/email.ts#L24)

___

### postcode

▸ **postcode**(`options`): `Promise`<{ `data`: `boolean`  }\>

Validates a postcode.

**`Example`**

```ts
const { validate } = require("apyhub");

const validatePostcode = async () => {
  const data = await validate.postcode({
    postcode: "560037",
    countryCode: "in"
  });
  return data;
};
```

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

[validate/postcode.ts:25](https://github.com/apyhub/apyhub.js/blob/d3e6ff5/src/validate/postcode.ts#L25)

___

### vat

▸ **vat**(`vat`): `Promise`<{ `data`: `boolean`  }\>

Validates a VAT number.

**`Example`**

```ts
const { validate } = require("apyhub");

const validateVat = async () => {
  const data = await validate.vat({
    vat: "GB123456789"
  });
  return data;
};
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `vat` | `string` |

#### Returns

`Promise`<{ `data`: `boolean`  }\>

- A promise that resolves to an object with the validation result.

#### Defined in

[validate/vat.ts:23](https://github.com/apyhub/apyhub.js/blob/d3e6ff5/src/validate/vat.ts#L23)
