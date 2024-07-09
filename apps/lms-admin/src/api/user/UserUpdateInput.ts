import { InputJsonValue } from "../../types";
import { EnrollmentUpdateManyWithoutUsersInput } from "./EnrollmentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  enrollments?: EnrollmentUpdateManyWithoutUsersInput;
  role?: "Option1" | null;
};
