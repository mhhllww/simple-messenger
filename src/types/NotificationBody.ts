import { Message } from "./Message";
import { Sender } from "./Sender";

export type NotificationBody = {
  typeWebhook: string;
  senderData: Sender;
  messageData: Message;
};