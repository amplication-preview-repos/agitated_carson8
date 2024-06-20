import { ContactCreateNestedManyWithoutUsersInput } from "./ContactCreateNestedManyWithoutUsersInput";
import { ItemCreateNestedManyWithoutUsersInput } from "./ItemCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  contacts?: ContactCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  items?: ItemCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
