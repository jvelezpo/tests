import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryUpdateInput = {
  color?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
