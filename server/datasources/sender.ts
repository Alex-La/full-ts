import { DataSource } from "apollo-datasource";
import { Document } from "mongoose";
import Sender from "../models/Sender";
import { MessageInputType } from "../schema/inputs/Sender";

class SenderAPI extends DataSource {
  async createSender(
    data: MessageInputType
  ): Promise<Document<MessageInputType>> {
    const sender = new Sender(data);
    await sender.save();
    return sender;
  }
}

export default SenderAPI;
