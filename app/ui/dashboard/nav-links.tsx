"use client";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`,
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}

/**Automatic code-splitting and prefetching
 * next.js automatically code-split the application by route segment.
 * this is different to the traditional SPA where browser loads all your application code on the initial page load.
 *
 *
 */

/** Pattern: showing active links
 * a common UI pattern is to show active link to indicate the user what page they are currently on. to do this, you need to get the user's current path form the URL.
 * next.js provide a hook called usePathname() that can be used to check the path and implement this pattern
 *
 * since usePathname() is a react hook. we need to turn "Nav-link.tsx" into a Client component. by adding "use client" directive to the top of file. then import it.
 *
 *
 */
