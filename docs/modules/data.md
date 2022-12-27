[apyhub](../README.md) / [Exports](../modules.md) / data

# Namespace: data

## Table of contents

### Functions

- [countries](data.md#countries)
- [country](data.md#country)
- [currencyConverter](data.md#currencyconverter)
- [currencyList](data.md#currencylist)
- [timezones](data.md#timezones)

## Functions

### countries

▸ **countries**(): `Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

Retrieves a list of countries and their associated data.

#### Returns

`Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

- A promise that resolves with an array of country objects, each containing calling codes, cca3 code, emoji, key, and value properties.

#### Defined in

[data/countries.ts:7](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/data/countries.ts#L7)

___

### country

▸ **country**(`country`): `Promise`<{ `calling_code`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `subdivision`: { `code`: `string` ; `name`: `string`  }[] ; `value`: `string`  }\>

Retrieves information about a specific country.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | The name or cca3 code of the country. |

#### Returns

`Promise`<{ `calling_code`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `subdivision`: { `code`: `string` ; `name`: `string`  }[] ; `value`: `string`  }\>

- A promise that resolves with an object containing the country's value, key, cca3 code, emoji, calling codes, and an array of subdivisions, each with a code and name.

#### Defined in

[data/country.ts:8](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/data/country.ts#L8)

___

### currencyConverter

▸ **currencyConverter**(`params`): `Promise`<{ `data`: `number`  }\>

Converts an amount in one currency to another.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.date?` | `string` | The date for the conversion (in the format "YYYY-MM-DD"). If not provided, the current date is used. |
| `params.source` | `string` | The source currency. |
| `params.target` | `string` | The target currency. |

#### Returns

`Promise`<{ `data`: `number`  }\>

- A promise that resolves with an object containing the converted amount.

#### Defined in

[data/currencyConverter.ts:12](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/data/currencyConverter.ts#L12)

___

### currencyList

▸ **currencyList**(): `Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

Retrieves a list of currencies and their associated data.

#### Returns

`Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

- A promise that resolves with an array of currency objects, each containing calling codes, cca3 code, emoji, key, and value properties.

#### Defined in

[data/currencyList.ts:7](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/data/currencyList.ts#L7)

___

### timezones

▸ **timezones**(): `Promise`<{ `data`: { `abbreviation`: `string`[] ; `key`: `string` ; `utc_time`: `string` ; `value`: `string`  }[]  }\>

Retrieves a list of timezones and their associated data.

#### Returns

`Promise`<{ `data`: { `abbreviation`: `string`[] ; `key`: `string` ; `utc_time`: `string` ; `value`: `string`  }[]  }\>

- A promise that resolves with an object containing an array of timezone objects, each with a key, value, abbreviation, and utc_time property.

#### Defined in

[data/timezones.ts:7](https://github.com/apyhub/apyhub.js/blob/cfcbfad/src/data/timezones.ts#L7)
