const items = [
  {
    label: "About",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Projects",
    href: "#",
  },
  {
    label: "Reviews",
    href: "#",
  },
];

const NavItems = () => {
  return (
    <>
      <ul className="flex flex-row gap-10 items-center">
        {items.map((item, i) => (
          <li key={i} className="font-medium uppercase text-xl">
            {item.label}
          </li>
        ))}
        <button className="bg-[#9765FF] uppercase text-xl font-medium text-white rounded-full px-8 py-4">
          contact us
        </button>
      </ul>
    </>
  );
};

export default NavItems;
