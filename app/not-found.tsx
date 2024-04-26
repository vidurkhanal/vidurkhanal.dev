import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] dark:from-[#1f2937] dark:to-[#111827]">
      <div className="relative mx-4 flex max-w-2xl flex-col items-center justify-center space-y-6 text-center sm:mx-6 md:mx-8 lg:mx-12">
        <div className="relative z-10 text-9xl font-bold tracking-tighter text-gray-900 dark:text-gray-50">
          404
        </div>
        <div className="relative z-10 max-w-md text-lg font-medium text-gray-600 dark:text-gray-400">
          Oops, it looks like the page you&lsquo;re looking for doesn&lsquo;t
          exist. Why not explore the rest of my portfolio?
        </div>
        <Link
          className="relative z-10 inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 py-2 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
          href="/"
        >
          Go to Homepage
        </Link>
        <div className="absolute inset-0 -z-10 bg-[url('/404-bg.svg')] bg-cover bg-center opacity-20 dark:opacity-30" />
      </div>
    </div>
  );
}
