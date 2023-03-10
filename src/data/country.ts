import { getInstance } from "../ApyClient";

/**
 * Retrieves information about a specific country.
 *
 * @example
 *   import { data } from "apyhub";
 *
 *   const country = () async => {
 *   const data = await data.country("United States");
 *   return data;
 *   }
 *
 * @param {string} country - The name or cca3 code of the country.
 * @returns {Promise<{
 *   value: string;
 *   key: string;
 *   cca3: string;
 *   emoji: string;
 *   calling_code: number[];
 *   subdivision: { code: string; name: string }[];
 * }>}
 *   - A promise that resolves with an object containing the country's value, key,
 *       cca3 code, emoji, calling codes, and an array of subdivisions, each
 *       with a code and name.
 *
 * @link https://apyhub.com/utility/data-info-country
 */
async function country(country: string): Promise<{
  value: string;
  key: string;
  cca3: string;
  emoji: string;
  calling_code: number[];
  subdivision: Array<{
    code: string;
    name: string;
  }>;
}> {
  const client = getInstance();
  if (!country) {
    throw new Error("Missing country");
  }
  const url = `https://api.apyhub.com/data/info/country?country=${country}`;
  return await client.request("get", url);
}

export { country };
