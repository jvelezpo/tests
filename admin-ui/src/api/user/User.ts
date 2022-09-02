import { Category } from "../category/Category";

export type User = {
  categories?: Array<Category>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
