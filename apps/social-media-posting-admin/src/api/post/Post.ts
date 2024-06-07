import { JsonValue } from "type-fest";

export type Post = {
  agentName: string | null;
  agentPhone: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  propertyImages: JsonValue;
  updatedAt: Date;
};
