import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return (
    <div
      className={`flex w-full max-w-5xl flex-col justify-between rounded-3xl bg-green-opacity-1 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
