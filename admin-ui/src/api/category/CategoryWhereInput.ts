import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
