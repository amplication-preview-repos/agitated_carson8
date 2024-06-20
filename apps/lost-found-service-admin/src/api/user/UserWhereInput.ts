import { ContactListRelationFilter } from "../contact/ContactListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";

export type UserWhereInput = {
  contacts?: ContactListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  items?: ItemListRelationFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
