import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";
import { QrCodeUpdateManyWithoutItemsInput } from "./QrCodeUpdateManyWithoutItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItemUpdateInput = {
  description?: string | null;
  name?: string | null;
  qrCode?: QrCodeWhereUniqueInput | null;
  qrCodes?: QrCodeUpdateManyWithoutItemsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
