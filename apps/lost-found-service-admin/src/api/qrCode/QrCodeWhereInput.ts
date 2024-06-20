import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type QrCodeWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  items?: ItemListRelationFilter;
};
