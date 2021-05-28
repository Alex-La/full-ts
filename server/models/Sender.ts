import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    host: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("Sender", schema);
