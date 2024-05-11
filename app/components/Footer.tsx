import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={"/"}>
              <h1 className="text-xl  md:text-3xl font-bold bg-yellow-50 rounded-xl">
                BD <span className="text-primary">.com</span>
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/dizas9"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <a
                    href="https://portfolio-v2-sazid.vercel.app/"
                    className="hover:underline"
                  >
                    About us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a
              href="https://portfolio-v2-sazid.vercel.app/"
              className="hover:underline"
            >
              dizas9™
            </a>
            . All Rights Reserved.
          </span>

        </div>
      </div>
    </div>
  );
}
