import { getInstance } from "../ApyClient";
import { checkMissingParams } from "../utils/checkMissingParams";
import { getFormData } from "../utils/getFormData";
import { isFileOrUrl } from "../utils/isFileOrUrl";

export async function unarchive({
  input,
  password,
}: {
  input: string | Buffer;
  password?: string;
}): Promise<{ data: Buffer }> {
  const client = getInstance();
  checkMissingParams({ input });

  const inputType = isFileOrUrl(input) === "file" ? "file" : "url";

  const url = `https://api.apyhub.com/extract/${
    password ? "secure-archive" : "archive"
  }/${inputType}/file-urls`;

  const formData = () => {
    const formData = getFormData(input, "file");
    password && formData.append("password", password);
    return formData;
  };

  const data =
    inputType === "url"
      ? {
          urls: input,
          password: password ?? undefined,
        }
      : formData();

  return await client.request("post", url, data);
}
