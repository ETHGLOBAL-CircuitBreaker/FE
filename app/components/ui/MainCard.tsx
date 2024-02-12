import { PropsWithChildren } from "react";

export function MainCard({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col justify-center px-16 py-12 bg-cyan-950 max-md:px-5">
      <div className="flex flex-col px-9 pt-8 pb-12 mx-7 mt-9 border border-solid shadow-lg backdrop-blur-[160px] bg-neutral-500 bg-opacity-10 border-[color:var(--card-strok-linear,rgba(255,255,255,0.80))] rounded-[36px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
        {children}
      </div>
    </div>
  );
}
