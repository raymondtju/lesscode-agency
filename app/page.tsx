import Arrowrd from "@/components/icons/arrowrd";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-20 relative border-b">
        <h1 className="text-2xl font-bold px-3 select-none">
          WE HELP YOU TO CREATE THE BEST
        </h1>
        <h1 className="font-bold text-[176px]/[176px] select-none">
          PRODUCT{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#E69CEB] via-[#3DB1DF] to-[#8A71F9]">
            EXP
          </span>
          ERIENCE
        </h1>

        <div className="absolute bottom-20 right-32 w-60 h-60 bg-[#9765FF] rounded-full flex items-center justify-center cursor-pointer">
          <Arrowrd className="" />
        </div>
      </div>
    </>
  );
}