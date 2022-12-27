import { getInstance } from "../ApyClient";

/**
 * Retrieves a list of countries and their associated data.
 * @return {Promise<Array<{calling_codes: number[], cca3: string, emoji: string, key: string, value: string}>>} - A promise that resolves with an array of country objects, each containing calling codes, cca3 code, emoji, key, and value properties.
 *
 * @example
 *
 * import { data } from "apyhub";
 *
 * const countries = async () => {
 *   const data = await data.countries();
 *    return data;
 * }
 */
async function countries(): Promise<
  Array<{
    calling_codes: number[];
    cca3: string;
    emoji: string;
    key: string;
    value: string;
  }>
> {
  const client = getInstance();
  const url = `https://api.apyhub.com/data/dictionary/country`;
  return await client.request("get", url);
}

export { countries };
