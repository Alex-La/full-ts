import Mongoose from "mongoose";
import config from "config";

export const mongoConnect = async (): Promise<void> => {
  try {
    await Mongoose.connect(config.get("mongoString"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (e) {
    console.log("Mongodb error", e.message);
    process.exit(1);
  }
};
