import Link from "../Link";
import NextLink from "next/link";

const Header: React.VFC = () => {
  return (
    <header className="pt-8 pb-16 md:pb-24 px-5 flex justify-between container mx-auto">
      <NextLink href="/">
        <img
          className="w-24 sm:w-32 md:w-40"
          src="/images/logo/northvolt-spacex.svg"
        />
      </NextLink>

      <nav>
        <Link
          className="mr-3 sm:mr-6 text-lg sm:text-2xl"
          href="/"
          text="Rockets"
        />
        <Link
          className="text-lg sm:text-2xl"
          href="/launchpads"
          text="Launchpads"
        />
      </nav>
    </header>
  );
};

export default Header;
