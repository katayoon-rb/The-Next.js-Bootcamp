"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='font-bold text-gray-700 text-2xl'>
        {" "}
        OpenTable{" "}
      </Link>
    </nav>
  );
}
