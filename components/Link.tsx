import NextLink from "next/link";
import { useRouter } from "next/router";
import { LinkTypes } from "../types/Link";

const Link: React.VFC<LinkTypes> = ({ text, href, className }) => {
  const { asPath } = useRouter();

  return (
    <NextLink href={href}>
      <a
        className={`${className} ${
          href === asPath ? "opacity-100" : "opacity-40"
        }`}
      >
        {text}
        <span className="text-2xl pl-1">&#8594;</span>
      </a>
    </NextLink>
  );
};

export default Link;
