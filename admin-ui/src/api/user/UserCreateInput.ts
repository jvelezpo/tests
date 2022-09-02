import { CategoryCreateNestedManyWithoutUsersInput } from "./CategoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  categories?: CategoryCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
