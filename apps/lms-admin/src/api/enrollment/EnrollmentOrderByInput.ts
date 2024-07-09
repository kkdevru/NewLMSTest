import { SortOrder } from "../../util/SortOrder";

export type EnrollmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  enrollmentDate?: SortOrder;
  userId?: SortOrder;
  courseId?: SortOrder;
};
