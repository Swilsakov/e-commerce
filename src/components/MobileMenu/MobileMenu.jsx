import React from "react";

export default function MobileMenu() {
  return (
    <div className=" pt-20 px-5 absolute top-0 left-0 bottom-0 right-0 justify-between bg-white z-10">
      <div>
        <menu className="flex items-center ">
          <nav>
            <ul className="text-2xl font-medium">
              <li className=" mt-4">
                <a href="/">Магазины</a>
              </li>
              <li className=" mt-4">
                <a href="/">Акции</a>
              </li>
              <li className=" mt-4">
                <a href="/">Доставка и оплата</a>
              </li>
            </ul>
          </nav>
        </menu>
      </div>
    </div>
  );
}
