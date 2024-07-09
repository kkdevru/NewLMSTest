import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  order?: SortOrder;
  title?: SortOrder;
};
