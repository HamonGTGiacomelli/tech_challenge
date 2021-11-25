import AWS from "aws-sdk";

const {S3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEY, S3_PORT, S3_HOST} = process.env;

export const s3 = new AWS.S3({
  s3ForcePathStyle: true,
  accessKeyId: S3_ACCESS_KEY_ID,
  secretAccessKey: S3_SECRET_ACCESS_KEY,
  endpoint: new AWS.Endpoint(`http://${S3_HOST}:${S3_PORT}`),
});
