import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QrCodeWhereUniqueInput } from "../qrCode/QrCodeWhereUniqueInput";
import { QrCodeListRelationFilter } from "../qrCode/QrCodeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ItemWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  qrCode?: QrCodeWhereUniqueInput;
  qrCodes?: QrCodeListRelationFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
