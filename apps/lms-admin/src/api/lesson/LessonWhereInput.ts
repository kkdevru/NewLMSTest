import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LessonWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  order?: IntNullableFilter;
  title?: StringNullableFilter;
};
