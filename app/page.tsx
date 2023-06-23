import Arrowrd from "@/components/icons/arrowrd";

export default function Home() {
  return (
    <>
      <div className="py-20 relative border-b">
        <h1 className="text-2xl font-bold px-3 select-none">
          WE HELP YOU TO CREATE THE BEST
        </h1>
        <h1 className="font-bold text-[176px]/[176px] select-none">
          PRODUCT <span className="text-gradiant">EXP</span>
          ERIENCE
        </h1>

        <div className="absolute bottom-20 right-32 w-60 h-60 bg-[#9765FF] rounded-full flex items-center justify-center cursor-pointer">
          <Arrowrd className="" />
        </div>
      </div>

      <div className="mt-8 border-b pb-20">
        <div className="flex justify-between">
          <h2 className="max-w-[290px] font-bold text-lg">
            PROFESIONAL CREATIVE AGENCY FROM INDONESIA
          </h2>
          <p className="max-w-[600px] text-lg">
            We are Lescode, creative design agency located in Medan, Indonesia.
            Let’s create best product experience with our experinced members.
          </p>
        </div>

        <div className="w-full h-[800px] bg-[#D9D9D9] rounded-[40px] mt-8"></div>

        <div className="grid mt-16">
          <h2 className="font-bold text-2xl">KNOW MORE ABOUT US</h2>
          <p className="max-w-[1264px] text-7xl/[1.2] mt-12 font-bold ">
            LOCATED IN <span className="text-gradiant">INDONESIA</span>, WE ARE
            PROFESSIONAL CREATIVE DESIGN AGENCY THAT HAVE DONE MANY PROJECT WITH
            VARIOUS CLIENTS{" "}
            <span className="text-gradiant">ACROSS THE WORLD</span>
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">OUR MILESTONE</h2>

          <div className="grid grid-cols-3 gap-40">
            {[
              { label: "Product Live", value: 320 },
              { label: "Satisfied Client", value: 80 },
              { label: "Years or Experience", value: 15 },
            ].map((item, i) => {
              return (
                <div key={i}>
                  <h4 className="font-bold text-8xl font-inter">
                    {item.value}
                    <span className="font-bold text-gradiant">+</span>
                  </h4>
                  <p className="font-semibold text-stone-700 text-2xl mt-3">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
