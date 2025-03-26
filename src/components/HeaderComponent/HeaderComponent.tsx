import Button from "../ButtonComponent/ButtonComponent";

const Header = () => {
  const links = [
    {
      name: "Categories",
      href: "#",
    },
    {
      name: "Blog",
      href: "#",
    },
    {
      name: "Login",
      href: "#",
    },
    {
      name: "Signup",
      href: "#",
    },
  ];
  return (
    <header className="sticky top-0 bg-white">
      <nav className=" border-gray-200 px-4 shadow lg:px-6 py-2.5  ">
        <div className="flex flex-wrap justify-between items-center mx-auto w-11/12">
          <h1 className="self-center text-2xl font-semibold whitespace-nowrap ">
            Willro
          </h1>
          <Button
            text="For Business"
            colorStyle="bg-sky-600 text-white font-bold lg:hidden block"
          />
          <div className="lg:flex items-center lg:order-2   hidden">
            <div className="space-x-5">
              <Button
                text="Share a Review"
                colorStyle="border-2 border-sky-500 font-bold text-red-600"
              />
              <Button
                text="For Business"
                colorStyle="bg-sky-600 text-white font-bold "
              />
            </div>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="block py-2 pr-4 pl-3  rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 "
                      aria-current="page"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
