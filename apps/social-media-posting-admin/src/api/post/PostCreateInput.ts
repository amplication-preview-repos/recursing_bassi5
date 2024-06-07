import { InputJsonValue } from "../../types";

export type PostCreateInput = {
  agentName?: string | null;
  agentPhone?: string | null;
  description?: string | null;
  propertyImages?: InputJsonValue;
};
