import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CategoryCreateInput = {
  color?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
