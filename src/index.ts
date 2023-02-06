import { initApyhub } from "./ApyClient";

import * as search from "./search";
import { fuzzy } from "./search";

import * as validate from "./validate";
import { email, postcode } from "./validate";

import * as imageProcessor from "./imageProcessor";
import { crop, resize, watermark, compress } from "./imageProcessor";

import * as generate from "./generate";
import {
  archive,
  barcode,
  charts,
  ical,
  pdf,
  qr,
  screenshot,
  thumbnail,
} from "./generate";

import * as extract from "./extract";
import {
  textFromPdf,
  textFromWebpage,
  textFromWord,
  imageMetadata,
  unarchive,
} from "./extract";

import * as data from "./data";
import {
  countries,
  country,
  currencyConverter,
  currencyList,
  timezones,
} from "./data";

import * as convert from "./convert";
import {
  csvToExcel,
  htmlToPdf,
  imageToPdf,
  markdownToHtml,
  presentationToPdf,
  spreadsheetToPdf,
  wordToPdf,
} from "./convert";

import { download } from "./utils/download";
export {
  extract,
  textFromPdf,
  textFromWebpage,
  textFromWord,
  imageMetadata,
  unarchive,
};
export { initApyhub };
export { download };

export { search, fuzzy };

export { validate, email, postcode };

export { imageProcessor, crop, resize, watermark, compress };

export {
  generate,
  archive,
  barcode,
  charts,
  ical,
  pdf,
  qr,
  screenshot,
  thumbnail,
};

export { data, countries, country, currencyConverter, currencyList, timezones };

export {
  convert,
  csvToExcel,
  htmlToPdf,
  imageToPdf,
  markdownToHtml,
  presentationToPdf,
  spreadsheetToPdf,
  wordToPdf,
};
