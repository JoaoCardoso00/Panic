import Cosmic from "cosmicjs";

const cosmicAPI = Cosmic();

export const projectsBucket = cosmicAPI.bucket({
  slug: process.env.COSMIC_BUCKET,
  read_key: process.env.COSMIC_READ_KEY,
});
