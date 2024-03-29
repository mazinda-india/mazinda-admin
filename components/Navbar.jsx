"use client";

import Link from "next/link";
import MazindaLogo from "@/public/logo_mazinda.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white px-6 py-5 flex justify-between">
      <Link href="/">
        <Image width={120} src={MazindaLogo} alt="Mazinda Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
