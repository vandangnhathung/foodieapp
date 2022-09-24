import React from "react";

const Header = () => {
  const navigation = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Faq",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  return (
    <header className="pc:container mx-auto">
      <nav className="flex justify-between items-center ip11pro:mx-[25px] pc:mx-0">
        <img src="/assets/images/logo.png" className="cursor-pointer" alt="" />
        <div className="icon pc:hidden cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="#737373"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <ul className="ip11pro:hidden pc:flex justify-between items-center gap-[104px] font-bold">
          {navigation.map((nav) => (
            <li id={nav.id} className={`${nav.id === 1 ? "text-primary" : ""}`}>
              <a href="">{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
