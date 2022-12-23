export function isFileOrUrl(input: string | Buffer): string {
  if (input instanceof Buffer) {
    return "file";
  } else if (
    input.match(
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    )
  ) {
    return "url";
  } else {
    return "file";
  }
}
