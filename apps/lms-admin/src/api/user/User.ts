import { JsonValue } from "type-fest";
import { Enrollment } from "../enrollment/Enrollment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  enrollments?: Array<Enrollment>;
  role?: "Option1" | null;
};
