import { User } from "../user/User";

export type Contact = {
  address: string | null;
  createdAt: Date;
  id: string;
  phoneNumber: string | null;
  updatedAt: Date;
  user?: User | null;
};
