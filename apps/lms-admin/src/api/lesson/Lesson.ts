export type Lesson = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  order: number | null;
  title: string | null;
};
