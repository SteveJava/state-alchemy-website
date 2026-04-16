import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="min-h-screen pt-28 px-6 max-w-7xl mx-auto text-white">
      {children}
    </div>
  );
}