import type { ReactNode } from "react";

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full px-6 md:px-10 pt-28 pb-20">
      {children}
    </div>
  );
};