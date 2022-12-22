import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";

export function getFormData(
  filePath: string | string[],
  fieldName: string
): FormData {
  const formData = new FormData();
  if (Array.isArray(filePath)) {
    filePath.forEach(fp => {
      const absoluteFilePath = path.resolve(fp);
      const file = fs.readFileSync(absoluteFilePath);
      formData.append(fieldName, Buffer.from(file), {
        contentType: "application/octet-stream",
        filename: path.basename(absoluteFilePath),
      });
    });
  } else {
    const absoluteFilePath = path.resolve(filePath);
    const file = fs.readFileSync(absoluteFilePath);
    formData.append(fieldName, Buffer.from(file), {
      contentType: "application/octet-stream",
      filename: path.basename(absoluteFilePath),
    });
  }
  return formData;
}

export function getFile(filePath: string): Buffer {
  const absoluteFilePath = path.resolve(filePath);
  const file = fs.readFileSync(absoluteFilePath);

  return Buffer.from(file);
}
