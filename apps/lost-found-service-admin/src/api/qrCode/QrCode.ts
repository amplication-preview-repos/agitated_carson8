import { Item } from "../item/Item";

export type QrCode = {
  code: string | null;
  createdAt: Date;
  id: string;
  item?: Item | null;
  items?: Array<Item>;
  updatedAt: Date;
};
