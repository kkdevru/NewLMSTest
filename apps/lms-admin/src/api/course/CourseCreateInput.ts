import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  title?: string | null;
  description?: string | null;
  level?: "Option1" | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
};
