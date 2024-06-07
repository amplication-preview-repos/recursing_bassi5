import { InputJsonValue } from "../../types";

export type PostUpdateInput = {
  agentName?: string | null;
  agentPhone?: string | null;
  description?: string | null;
  propertyImages?: InputJsonValue;
};
