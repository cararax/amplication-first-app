import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  dueDate?: DateTimeNullableFilter;
  field?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  ownerField?: UserWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  tasks?: TaskListRelationFilter;
};
