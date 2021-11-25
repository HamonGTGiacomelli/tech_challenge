import { s3 } from "../utils";

const songsLocation = {
  Bucket: "local-bucket",
  Key: "songData.json",
};

export const fetchSongsJSONFile = async () => {
  return await s3
    .getObject(songsLocation)
    .promise()
    .then((res) => {
      console.log({ body: res.Body });
      return res.Body ? JSON.parse(res.Body.toString("utf-8")) : "";
    })
    .catch((err) => {
      return err;
    });
};

export const storeSongsJSONFile = async () => {
  try {
    const obj = await s3
      .putObject(
        {
          ...songsLocation,
          Body: Buffer.from(
            JSON.stringify(require("../../resource/songData.json"))
          ),
        },
        () => {}
      )
      .promise();
    return JSON.stringify(obj.$response.data);
  } catch (err) {
    return JSON.stringify(err);
  }
};
