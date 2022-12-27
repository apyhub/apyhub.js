import { getInstance } from "../ApyClient";

/**
 * Retrieves a list of timezones and their associated data.
 * @return {Promise<{data: Array<{key: string, value: string, abbreviation: string[], utc_time: string}>}>} - A promise that resolves with an object containing an array of timezone objects, each with a key, value, abbreviation, and utc_time property.
 *
 * @example
 *
 * import { data } from "apy-client";
 *
 * const timezones = await data.timezones();
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
