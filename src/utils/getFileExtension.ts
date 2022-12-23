export function getFileExtension(buffer: Buffer) {
  // Check for the various file types we support.
  if (buffer.slice(0, 4).toString() === "%PDF") {
    return "pdf";
  } else if (buffer.slice(0, 2).toString() === "PK") {
    return "docx";
  } else if (buffer.slice(0, 2).toString() === "PK") {
    return "pptx";
  } else if (buffer.slice(0, 2).toString() === "PK") {
    return "xlsx";
  } else if (buffer.slice(0, 5).toString() === "<html") {
    return "html";
  } else if (buffer.slice(0, 3).toString() === "---") {
    return "md";
  } else if (buffer.slice(0, 2).toString() === "BM") {
    return "jpg";
  } else if (buffer.slice(0, 3).toString() === "GIF") {
    return "jpg";
  } else if (buffer.slice(0, 3).toString() === "PNG") {
    return "jpg";
  } else if (buffer.slice(0, 4).toString() === "\x89PNG") {
    return "jpg";
  } else if (buffer.slice(0, 4).toString() === "\xff\xd8\xff\xe0") {
    return "jpg";
  } else if (buffer.slice(0, 4).toString() === "\xff\xd8\xff\xe1") {
    return "jpg";
  } else if (buffer.slice(0, 4).toString() === "ID\x01\x02") {
    return "csv";
  }
  // If the file type isn't recognized, return null.
  return null;
}
