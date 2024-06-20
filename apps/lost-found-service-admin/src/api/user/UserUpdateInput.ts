import { ContactUpdateManyWithoutUsersInput } from "./ContactUpdateManyWithoutUsersInput";
import { ItemUpdateManyWithoutUsersInput } from "./ItemUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  contacts?: ContactUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  items?: ItemUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
