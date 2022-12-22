export function handleEndPoint(
  type: string,
  inputType: string,
  responseFormat: string
): string {
  if (inputType === "file" && responseFormat === "file") {
    return `${type}/file`;
  } else if (inputType === "file" && responseFormat === "url") {
    return `${type}/file/url${type === "resize" ? "s" : ""}`;
  } else if (inputType === "url" && responseFormat === "file") {
    return `${type}/url/file`;
  } else if (inputType === "url" && responseFormat === "url") {
    return `${type}/file-urls`;
  }
  return "";
}
