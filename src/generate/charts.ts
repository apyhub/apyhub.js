import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { checkParamTypes } from "../utils/checkParamsTypes";

/**
 * Generates a chart image from data and chart options.
 * @param {Object} options - The options object.
 * @param {"file"|"url"} options.responseFormat - The format in which the chart should be returned. Valid values are "url" or "file".
 * @param {"bar"|"pie"|"stacked"} options.chartType - The type of chart to generate. Valid values are "bar", "pie" or "stacked".
 * @param {string} [options.output] - The file path where the chart should be saved. This parameter is only used if responseFormat is "file".
 * @param {string} [options.title] - The title of the chart.
 * @param {"light"|"dark"} [options.theme] - The theme of the chart. Valid values are "light" or "dark".
 * @param {Array<{value: number, label: string}>} options.data - The data to be used to generate the chart.
 * @returns {Promise<{data: string}>} A promise that resolves with the chart data if successful.
 * @example
 * const { charts } = require("apyhub");
 *
 * const data = [
 *  { value: 10, label: "A" },
 * { value: 20, label: "B" },
 * { value: 30, label: "C" },
 * { value: 40, label: "D" },
 * ]
 *
 * charts({
 * responseFormat: "file",
 * chartType: "bar",
 * output: "chart.png",
 * title: "My Chart",
 * theme: "light",
 * data,
 * }).then((res) => {
 * console.log(res);
 * });
 *
 */
async function charts({
  responseFormat,
  chartType,
  output,
  title,
  theme,
  data,
}: {
  responseFormat: "file" | "url";
  chartType: "bar" | "pie" | "stacked";
  output?: string;
  title?: string;
  theme?: "light" | "dark";
  data: Array<{ value: number; label: string }>;
}): Promise<{ data: string }> {
  const client = getInstance();

  checkMissingParams({ responseFormat, chartType, data });
  checkParamTypes({ responseFormat }, ["file", "url"]);
  checkParamTypes({ chartType }, ["bar", "pie", "stacked"]);
  theme && checkParamTypes({ theme }, ["light", "dark"]);

  const url = `https://api.apyhub.com/generate/charts/${chartType}/${responseFormat}?output=${output ??
    "output.png"}`;
  const payload = {
    ...(title && { title }),
    ...(theme && { theme: theme[0].toUpperCase() + theme.slice(1) }),
    data,
  };
  return await client.request("post", url, payload);
}

export { charts };
