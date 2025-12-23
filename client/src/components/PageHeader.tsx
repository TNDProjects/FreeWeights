import type { ReactNode } from "react";

type PageHeaderProps = {
  line1: string;
  line2?: string;
  icon: ReactNode
  description: string
};

function PageHeader({ line1, line2, icon, description }: PageHeaderProps) {
  return (
    <div className="py-12 flex flex-col justify-center gap-3">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl lg:text-3xl !leading-8">
          {line1}
          {line2 && (
            <>
              <br />
              {line2}
            </>
          )}
        </h1>
        {icon}
      </div>
      <div>
        <h3 className="text-xs lg:text-sm text-grey tracking-tighter">{description}</h3>
      </div>
    </div>
  );
}

export default PageHeader;