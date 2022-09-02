import { User } from "../user/User";

export type Category = {
  color: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
