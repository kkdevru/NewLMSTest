import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type EnrollmentWhereInput = {
  id?: StringFilter;
  enrollmentDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
  course?: CourseWhereUniqueInput;
};
