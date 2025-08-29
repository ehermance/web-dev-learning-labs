import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  selectedClasses: string;
  onClick: () => void;
}

const Button = ({ children, selectedClasses, onClick }: Props) => {
  return (
    <button className={`btn ${selectedClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
