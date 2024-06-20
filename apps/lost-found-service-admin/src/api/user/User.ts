import { Contact } from "../contact/Contact";
import { Item } from "../item/Item";
import { JsonValue } from "type-fest";

export type User = {
  contacts?: Array<Contact>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  items?: Array<Item>;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
