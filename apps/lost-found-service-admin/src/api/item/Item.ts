import { QrCode } from "../qrCode/QrCode";
import { User } from "../user/User";

export type Item = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  qrCode?: QrCode | null;
  qrCodes?: Array<QrCode>;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
