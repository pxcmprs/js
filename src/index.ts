import { encode } from "./base64";

export enum Format {
  Jpeg = "jpeg",
  Png = "png",
  Gif = "gif",
  WebP = "webp",
}

export interface Request {
  source: string;
  format?: Format;
  width?: number;
  height?: number;
  quality?: number;
}

export default class Pxcmprs {
  public endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public generateUrl({ source, format, ...query }: Request): string {
    let queryString = Object.entries(query)
      .map(([key, value]) => {
        return key + "=" + value;
      })
      .join("&");

    return `${this.endpoint}/${encode(source)}${format ? "." + format : ""}?${queryString}`;
  }
}
