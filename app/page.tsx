import Image from "next/image";
import { MainCard } from "./components/ui/MainCard";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Input } from "./components/ui/Input";
import { Button } from "./components/ui/Button";

function LoginButton({
  children,
  bgColor,
}: PropsWithChildren<{ bgColor?: string }>) {
  return (
    <div
      className={clsx(
        "flex flex-1 justify-center items-center px-7 py-2 rounded-xl  bg-opacity-50 max-md:px-5",
        bgColor
      )}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <MainCard>
      <div className="flex flex-col">
        <div className="flex gap-4 justify-between text-3xl font-medium text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="grow">Sign In</div>
          <div className="max-w-full h-[45px] w-[1077px]" />
        </div>
        <div className="flex flex-col self-center px-9 py-6 mt-32 mb-36 max-w-full rounded-3xl  max-md:px-5 max-md:my-10">
          <Image
            loading="lazy"
            src="/images/logo.svg"
            className="self-center w-11 aspect-square"
            alt="Logo"
            width={44}
            height={44}
          />
          <div className="flex gap-2.5 justify-between mt-5">
            <LoginButton bgColor="bg-violet-500">G</LoginButton>
            <LoginButton bgColor="bg-black">A</LoginButton>
            <LoginButton bgColor="bg-blue-600">F</LoginButton>
          </div>
          <div className="flex gap-3 justify-center items-center mt-5 text-xs text-sky-100 text-opacity-70">
            <div className="self-stretch my-auto h-px bg-sky-100 bg-opacity-70 w-[85px]" />
            <div className="self-stretch">or sign in with</div>
            <div className="self-stretch my-auto h-px bg-sky-100 bg-opacity-70 w-[85px]" />
          </div>
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent justify-center items-start py-2.5 pr-16 pl-2.5 mt-5 text-base whitespace-nowrap rounded-xl border border-white border-solid text-sky-100 text-opacity-70 max-md:pr-5"
          />
          <Input
            type="password"
            placeholder="Password"
            className="bg-transparent justify-center items-start py-2.5 pr-16 pl-2.5 mt-5 text-base whitespace-nowrap rounded-xl border border-white border-solid text-sky-100 text-opacity-70 max-md:pr-5"
          />
          <Button className="justify-center items-center px-16 py-2.5 mt-5 text-base text-sky-300 whitespace-nowrap rounded-xl border border-solid border-[color:var(--primary-500,#6EC9E7)] max-md:px-5 hover:bg-[#6EC9E7] hover:text-black duration-200">
            Sign in
          </Button>
          <div className="flex gap-5 justify-between px-4 mt-5 text-xs text-sky-100 text-opacity-70">
            <div>Sign Up</div>
            <div>Forgot Password</div>
            <div>Contact Us</div>
          </div>
        </div>
      </div>
    </MainCard>
  );
}
