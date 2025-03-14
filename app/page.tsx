import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import styles from '@/app/ui/home.module.css';
import {lusitana} from 'app/ui/fonts'
import AcmeLogo from "./ui/acme-logo";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">

      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        {/* <div className={styles.shape}/> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative h-0 w-0 border-b-[26px] border-l-[15px] border-r-[15px] border-b-black border-l-transparent border-r-transparent" />
          <p className={`${lusitana.className}text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src='/hero-desktop.png'
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src='/hero-mobile.png'
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
           />
        </div>
      </div>
    </main>
  );
}


/** Why optimize images?
 * ensure images are responsive for different screen size.
 * specify image size for different screen size.
 * prevent layout shift s image loads
 * lazy load images that are outside the user viewport.
 */

/**the Image component: this component is an extension of hte HTML <img> tag, and come with automatic image optimization, such as;
 * prevent layout shift,
 * Resize image to avoid shipping large for smaller screen
 * lazy loading image by default 
 * serving image in modern format, like WebP and AVIF, when the browser support it.
 * 
 * 
 */

/** Nested routing
 * Next.js uses file-system routing where folder are used to crate nested routes. Each folder represent a route segment that maps to the URL segment.
 * 
 * we can create a separate UIs for each route using layout.ts and page.tsx files.
 * 
 * 
 */