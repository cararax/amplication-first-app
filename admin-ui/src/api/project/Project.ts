import { User } from "../user/User";
import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  dueDate: Date | null;
  field: string | null;
  id: string;
  name: string;
  ownerField?: User;
  startDate: Date | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
