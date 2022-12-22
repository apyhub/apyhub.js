import * as fs from "fs";
import * as path from "path";
import FormData from "form-data";

export function getFormData(filePath: string, fieldName: string): FormData {
  const absoluteFilePath = path.resolve(filePath);
  const file = fs.readFileSync(absoluteFilePath);
  const formData = new FormData();
  formData.append(fieldName, Buffer.from(file), {
    contentType: "application/octet-stream",
    filename: "test.jpg",
  });
  return formData;
}
