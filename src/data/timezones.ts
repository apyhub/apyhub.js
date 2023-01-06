import { getInstance } from "../ApyClient";

/**
 * Retrieves a list of timezones and their associated data.
 *
 * @example
 *   import { data } from "apy-client";
 *
 *   const timezones = async () => {
 *     const data = await data.timezones();
 *     return data;
 *   };
 *
 * @returns {Promise<{
 *   data: {
 *     key: string;
 *     value: string;
 *     abbreviation: string[];
 *     utc_time: string;
 *   }[];
 * }>}
 *   - A promise that resolves with an object containing an array of timezone
 *       objects, each with a key, value, abbreviation, and utc_time property.
 *
 * @link https://apyhub.com/utility/data-lists-timezone
 */
async function timezones(): Promise<{
  data: Array<{
    key: string;
    value: string;
    abbreviation: string[];
    utc_time: string;
  }>;
}> {
  const client = getInstance();
  const url = `https://api.apyhub.com/data/dictionary/timezone`;
  return await client.request("get", url);
}

export { timezones };
