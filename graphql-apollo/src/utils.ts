import AWS from "aws-sdk";

export const s3 = new AWS.S3({
  s3ForcePathStyle: true,
  accessKeyId: "S3RVER",
  secretAccessKey: "S3RVER",
  endpoint: new AWS.Endpoint("http://localhost:4569"),
});
