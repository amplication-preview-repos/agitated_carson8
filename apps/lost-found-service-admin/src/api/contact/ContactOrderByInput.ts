import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
