import { SortOrder } from "../../util/SortOrder";

export type QrCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  updatedAt?: SortOrder;
};
