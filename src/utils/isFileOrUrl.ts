export function isFileOrUrl(input: any): string {
  // Check if the input is a valid URL
  if (input.startsWith("http://") || input.startsWith("https://")) {
    return "url";
  }

  // Check if the input is a valid file path
  if (input.startsWith("/") || input.startsWith(".")) {
    return "file";
  }

  // If the input does not match either of the above conditions, it is not a valid file or URL
  throw new Error(
    "Invalid input provided. Please provide a valid file path or URL."
  );
}
