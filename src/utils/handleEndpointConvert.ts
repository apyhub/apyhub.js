function handleEndPointConvert(
  input: string,
  output: string,
  inputType: string,
  responseFormat: string
): string {
  if (inputType === "file" && responseFormat === "file") {
    return `${input}-file/${output}-file`;
  } else if (inputType === "file" && responseFormat === "url") {
    return `${input}-file/${output}-url`;
  } else if (inputType === "url" && responseFormat === "file") {
    return `${input}-url/${output}-file`;
  } else if (inputType === "url" && responseFormat === "url") {
    return `${input}-url/${output}-url`;
  }
  return "";
}

export { handleEndPointConvert };
