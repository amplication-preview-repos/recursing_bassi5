import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PostWhereInput = {
  agentName?: StringNullableFilter;
  agentPhone?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  propertyImages?: JsonFilter;
};
