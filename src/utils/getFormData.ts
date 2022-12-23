import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";

export function getFormData(
  file: string | Buffer,
  fieldName: string
): FormData {
  const formData = new FormData();
  if (typeof file === "string") {
    const absoluteFilePath = path.resolve(file);
    const fileBuffer = fs.readFileSync(absoluteFilePath);
    formData.append(fieldName, fileBuffer, {
      contentType: "application/octet-stream",
      filename: path.basename(absoluteFilePath),
    });
  } else {
    formData.append(fieldName, file, {
      contentType: "application/octet-stream",
      filename: "file",
    });
  }
  return formData;
}

export function getFile(filePath: string): Buffer {
  const absoluteFilePath = path.resolve(filePath);
  const file = fs.readFileSync(absoluteFilePath);

  return Buffer.from(file);
}
