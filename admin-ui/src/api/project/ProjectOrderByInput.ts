import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  field?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerFieldId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
