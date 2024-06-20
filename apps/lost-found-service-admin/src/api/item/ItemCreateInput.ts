import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";
import { QrCodeCreateNestedManyWithoutItemsInput } from "./QrCodeCreateNestedManyWithoutItemsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItemCreateInput = {
  description?: string | null;
  name?: string | null;
  qrCode?: QrCodeWhereUniqueInput | null;
  qrCodes?: QrCodeCreateNestedManyWithoutItemsInput;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
