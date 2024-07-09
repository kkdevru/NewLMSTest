import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";

export type EnrollmentCreateInput = {
  enrollmentDate?: Date | null;
  user?: UserWhereUniqueInput | null;
  course?: CourseWhereUniqueInput | null;
};
