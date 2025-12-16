import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const CourseGoal = ({ title, children }: Props) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
