"use client";

import { categories } from "../../../helpers";
import { usePathname } from "next/navigation";
import Navlink from "./Navlink";

function NavLinks() {
  const pathname = usePathname();
  return (
    <nav>
      {categories.map((category) => (
        <Navlink key={category} category={category} isActive />
      ))}
    </nav>
  );
}

export default NavLinks;

//Receive array of categories that need to be mapped through;
