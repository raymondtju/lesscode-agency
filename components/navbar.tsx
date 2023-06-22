import Logo from "./icons/logo";
import NavItems from "./nav-items";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center py-8 border-b">
        <div className="flex gap-2 items-center">
          <Logo />
          <h1 className="font-bold text-4xl">LessCode</h1>
        </div>

        <NavItems />
      </div>
    </>
  );
};

export default Navbar;
