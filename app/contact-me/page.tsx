import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { SiLinkedin, SiMinutemailer, SiX } from "react-icons/si";

export default function ContactMe() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 lg:ml-60">
      <div className="container px-4 md:px-6 space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl text-gray-600 font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Whether you have a question, want to collaborate, or just say hello,
            I&lsquo;m here to help. Reach out through any of the options below
            and I&lsquo;ll get back to you as soon as I can.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
              <SiMinutemailer className="h-10 w-10 text-gray-500 dark:text-gray-400" />
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  vidurkhanal@gmail.com
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="mailto:vidurkhanal@gmail.com"
              >
                Email Me
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
              <SiLinkedin className="h-10 w-10 text-gray-500 dark:text-gray-400" />
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Connect with me on LinkedIn
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://www.linkedin.com/in/vidurkhanal"
                target="_blank"
              >
                Connect
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
              <SiX className="h-10 w-10 text-gray-500 dark:text-gray-400" />
              <div className="space-y-1 text-center">
                <h3 className="text-lg font-semibold">X (fka Twitter)</h3>
                <p className=" text-gray-500 dark:text-gray-400">
                  Direct message me
                </p>
              </div>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://www.twitter.com/vidurkl"
                target="_blank"
              >
                Message
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
