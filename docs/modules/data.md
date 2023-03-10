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

**`Example`**

```ts
import { data } from "apyhub";

  const countries = async () => {
    const data = await data.countries();
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/data-lists-country

#### Returns

`Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

- A promise that resolves with an array of country objects, each containing
      calling codes, cca3 code, emoji, key, and value properties.

#### Defined in

[data/countries.ts:28](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/data/countries.ts#L28)

___

### country

▸ **country**(`country`): `Promise`<{ `calling_code`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `subdivision`: { `code`: `string` ; `name`: `string`  }[] ; `value`: `string`  }\>

Retrieves information about a specific country.

**`Example`**

```ts
import { data } from "apyhub";

  const country = () async => {
  const data = await data.country("United States");
  return data;
  }
```

**`Link`**

https://apyhub.com/utility/data-info-country

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `country` | `string` | The name or cca3 code of the country. |

#### Returns

`Promise`<{ `calling_code`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `subdivision`: { `code`: `string` ; `name`: `string`  }[] ; `value`: `string`  }\>

- A promise that resolves with an object containing the country's value, key,
      cca3 code, emoji, calling codes, and an array of subdivisions, each
      with a code and name.

#### Defined in

[data/country.ts:29](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/data/country.ts#L29)

___

### currencyConverter

▸ **currencyConverter**(`params`): `Promise`<{ `data`: `number`  }\>

Converts an amount in one currency to another.

**`Example`**

```ts
import { data } from "apyhub";

  const currencyConverter = async () => {
    const response = await data.currencyConverter({
      source: "USD",
      target: "EUR",
      date: "2021-01-01",
    });
    return response;
  };
```

**`Link`**

https://apyhub.com/utility/currency-conversion

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the conversion. |
| `params.date?` | `string` | The date for the conversion (in the format "YYYY-MM-DD"). If not provided, the current date is used. |
| `params.source` | `string` | The source currency. |
| `params.target` | `string` | The target currency. |

#### Returns

`Promise`<{ `data`: `number`  }\>

- A promise that resolves with an object
  containing the converted amount.

#### Defined in

[data/currencyConverter.ts:28](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/data/currencyConverter.ts#L28)

___

### currencyList

▸ **currencyList**(): `Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

Retrieves a list of currencies and their associated data.

**`Example`**

```ts
import { data } from "apy-client";

  const currencyList = async () => {
    const data = await data.currencyList();
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/data-lists-currency

#### Returns

`Promise`<{ `calling_codes`: `number`[] ; `cca3`: `string` ; `emoji`: `string` ; `key`: `string` ; `value`: `string`  }[]\>

- A promise that resolves with an array of currency objects, each containing
      calling codes, cca3 code, emoji, key, and value properties.

#### Defined in

[data/currencyList.ts:28](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/data/currencyList.ts#L28)

___

### timezones

▸ **timezones**(): `Promise`<{ `data`: { `abbreviation`: `string`[] ; `key`: `string` ; `utc_time`: `string` ; `value`: `string`  }[]  }\>

Retrieves a list of timezones and their associated data.

**`Example`**

```ts
import { data } from "apy-client";

  const timezones = async () => {
    const data = await data.timezones();
    return data;
  };
```

**`Link`**

https://apyhub.com/utility/data-lists-timezone

#### Returns

`Promise`<{ `data`: { `abbreviation`: `string`[] ; `key`: `string` ; `utc_time`: `string` ; `value`: `string`  }[]  }\>

- A promise that resolves with an object containing an array of timezone
      objects, each with a key, value, abbreviation, and utc_time property.

#### Defined in

[data/timezones.ts:27](https://github.com/apyhub/apyhub.js/blob/d7767a2/src/data/timezones.ts#L27)
