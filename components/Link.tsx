import NextLink from "next/link";
import { useRouter } from "next/router";

const Link = ({
  text,
  href,
  className,
  white,
  large,
}: {
  text: string;
  href: string;
  className?: string;
  white?: boolean;
  large?: boolean;
}) => {
  const { asPath } = useRouter();

  return (
    <NextLink href={href}>
      <a
        className={`${className} ${
          href === asPath ? "opacity-100" : "opacity-40"
        }`}
      >
        {text}
        <span className={`${large ? "text-2xl pl-1" : "text-lg pl-0.5"}`}>
          &#8594;
        </span>
      </a>
    </NextLink>
  );
};

export default Link;
