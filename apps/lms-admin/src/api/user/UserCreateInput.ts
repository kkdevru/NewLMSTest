import { InputJsonValue } from "../../types";
import { EnrollmentCreateNestedManyWithoutUsersInput } from "./EnrollmentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  enrollments?: EnrollmentCreateNestedManyWithoutUsersInput;
  role?: "Option1" | null;
};
