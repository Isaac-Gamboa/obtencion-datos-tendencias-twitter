import { client, barer } from "./dataConfig";
const { TwitterApi } = require("twitter-api-v2");

const twitterClient = client.readWrite;
// const twitterBarer = barer.readOnly;

const tweet = async () => {
  try {
    await twitterClient.v2.tweet(
      "Tweet de prueba tendencias de ingenieria de software"
    );
  } catch (e) {
    console.error(e);
  }
};

tweet();
