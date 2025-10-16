import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10 px-3 sm:px-0">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full backdrop-blur-md bg-white/10 max-w-full overflow-x-auto scrollbar-hide">
        <Link href="#home" className="nav-items whitespace-nowrap">
          Home
        </Link>
<Link href="#about" className="nav-items whitespace-nowrap">
          About
        </Link>
 <Link href="#experience" className="nav-items whitespace-nowrap">
          Experience
        </Link>
 <Link href="#projects" className="nav-items whitespace-nowrap">
          Projects
        </Link>
  <Link href="#contact" className="nav-items bg-white text-gray-900 hover:bg-white-70 whitespace-nowrap">
          Contact
        </Link>
      </nav>
    </div>
  );
};
