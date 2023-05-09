import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function MobileCustomLink({ href, title, className, toggle }) {
  const currentPath = usePathname();
  const router = useRouter();

  const handleClick = (event) => {
    toggle(event);
    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-white absolute left-0 bottom-0
         group-hover:w-full transition-[width] ease duration-300 ${
           router === href ? "w-full" : "w-0"
         }`}
      />
    </Link>
  );
}
