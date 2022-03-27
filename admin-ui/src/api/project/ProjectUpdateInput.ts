import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  dueDate?: Date | null;
  field?: string | null;
  name?: string;
  ownerField?: UserWhereUniqueInput;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
