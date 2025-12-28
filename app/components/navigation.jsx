import Link from "next/link";

export default function Navigation () {
  return(
    <div className="h-[55] w-full bg-gray-50 border-b border-gray-200 flex items-center">
      <div className="flex w-full px-4 items-center">
        <h1 className="text-blue-800">myWebsite</h1>

        <div className="ml-auto flex gap-16">
        <Link href="/" className="text-blue-800 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded transition">
          Home
        </Link>
        <Link href="/About" className=" text-blue-800 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded transition">
          About
        </Link>
        <Link href="/Contact" className=" text-blue-800 hover:text-blue-900 hover:bg-blue-50 px-2 py-1 rounded transition">
          Contact
        </Link>
        </div>
      </div>
    </div>
  );
}
