import { ReactNode } from "react";

interface Props {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}
const CourseGoal = ({ id, title, children, onDelete }: Props) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
