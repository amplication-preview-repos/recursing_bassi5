import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  agentName?: SortOrder;
  agentPhone?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  propertyImages?: SortOrder;
  updatedAt?: SortOrder;
};
