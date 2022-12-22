import { getInstance } from "../ApyClient";

/**
 * Retrieves a list of currencies and their associated data.
 * @return {Promise<Array<{calling_codes: number[], cca3: string, emoji: string, key: string, value: string}>>} - A promise that resolves with an array of currency objects, each containing calling codes, cca3 code, emoji, key, and value properties.
 */
async function currencyList(): Promise<
  Array<{
    calling_codes: number[];
    cca3: string;
    emoji: string;
    key: string;
    value: string;
  }>
> {
  const client = getInstance();
  const url = `https://api.apyhub.com/data/dictionary/currency`;
  return await client.request("get", url);
}
export { currencyList };
