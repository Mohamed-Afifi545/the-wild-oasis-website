import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

function Logo() {
  return (
    <Link
      href="/"
      className="flex sm:flex-row flex-col items-center gap-4 z-10"
    >
      <Image
        src={logo}
        quality={100}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
      />
      <span className="text-lg sm:text-xl font-semibold text-primary-100 hidden sm:block">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
