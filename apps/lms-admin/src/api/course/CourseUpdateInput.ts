import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  title?: string | null;
  description?: string | null;
  level?: "Option1" | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
};
