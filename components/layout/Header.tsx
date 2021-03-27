import Link from "../Link";
import NextLink from "next/link";

const Header: React.VFC = () => {
  return (
    <header className="pt-8 pb-24 flex justify-between container mx-auto">
      <NextLink href="/">
        <a className="text-3xl">
          <img src="/images/logo/northvolt-spacex.svg" />
        </a>
      </NextLink>

      <nav>
        <Link white large className="mr-6 text-2xl" href="/" text="Rockets" />
        <Link
          white
          large
          className="text-2xl"
          href="/launchpads"
          text="Launchpads"
        />
      </nav>
    </header>
  );
};

export default Header;
