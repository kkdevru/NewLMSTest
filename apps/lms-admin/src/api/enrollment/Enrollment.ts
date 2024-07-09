import { User } from "../user/User";
import { Course } from "../course/Course";

export type Enrollment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  enrollmentDate: Date | null;
  user?: User | null;
  course?: Course | null;
};
