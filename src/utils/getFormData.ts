import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";
import { getFileExtension } from "./getFileExtension";

export function getFormData(
  file: string | Buffer | (string | Buffer)[],
  fieldName: string
): FormData {
  const formData = new FormData();
  if (typeof file === "string" || file instanceof Buffer) {
    file = [file];
  }
  for (const f of file) {
    if (typeof f === "string") {
      const absoluteFilePath = path.resolve(f);
      const fileBuffer = fs.readFileSync(absoluteFilePath);
      formData.append(fieldName, fileBuffer, {
        contentType: "application/octet-stream",
        filename: path.basename(absoluteFilePath),
      });
    } else {
      formData.append(fieldName, f, {
        contentType: "application/octet-stream",
        filename: `file.${getFileExtension(f)}`,
      });
    }
  }
  return formData;
}

export function getFile(filePath: string): Buffer {
  const absoluteFilePath = path.resolve(filePath);
  const file = fs.readFileSync(absoluteFilePath);

  return Buffer.from(file);
}
