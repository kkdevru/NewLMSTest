import { Enrollment } from "../enrollment/Enrollment";

export type Course = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  level?: "Option1" | null;
  enrollments?: Array<Enrollment>;
};
