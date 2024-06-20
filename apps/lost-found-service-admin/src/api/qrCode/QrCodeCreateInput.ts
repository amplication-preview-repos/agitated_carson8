import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemCreateNestedManyWithoutQrCodesInput } from "./ItemCreateNestedManyWithoutQrCodesInput";

export type QrCodeCreateInput = {
  code?: string | null;
  item?: ItemWhereUniqueInput | null;
  items?: ItemCreateNestedManyWithoutQrCodesInput;
};
