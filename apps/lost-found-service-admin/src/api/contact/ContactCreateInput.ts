import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ContactCreateInput = {
  address?: string | null;
  phoneNumber?: string | null;
  user?: UserWhereUniqueInput | null;
};
