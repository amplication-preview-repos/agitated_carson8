import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemUpdateManyWithoutQrCodesInput } from "./ItemUpdateManyWithoutQrCodesInput";

export type QrCodeUpdateInput = {
  code?: string | null;
  item?: ItemWhereUniqueInput | null;
  items?: ItemUpdateManyWithoutQrCodesInput;
};
