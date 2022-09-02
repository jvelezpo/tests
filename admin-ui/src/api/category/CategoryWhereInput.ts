import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
