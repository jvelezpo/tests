import { CategoryUpdateManyWithoutUsersInput } from "./CategoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  categories?: CategoryUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
