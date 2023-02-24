import { s3BaseUrl } from "constant/s3BaseUrl";

export const awsAssetsFetcher = (id, type) => {
  return `${s3BaseUrl}/${id}${type ? "." + type : ".png"}`;
};
