"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingBasket, User } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Logout } from "./Logout";

const link = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teen", href: "/Teen" },
  { name: "Kids", href: "/Kids" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-2xl md:text-4xl font-bold">
            BD <span className="text-primary">.com</span>
          </h1>
        </Link>

        {/* navlinks */}

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {link.map((link, index) => (
            <div key={index}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* cart Button */}

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant="outline"
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:w-20 md:h-24 rounded-none"
          >
            <ShoppingBasket />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>

        {/* Accounts */}
        <div className="flex items-center">
          {session?.user ? (
            <div className="flex lg:flex-col items-center gap-2">
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={session.user.image}
                        alt={session.user.name!}
                        width={40}
                        height={40}
                        className="scale-animation img"
                      />
                    </div>
                    <p className="lg:flex hidden text-sm text-gray-500">
                      {session ? `Hi ,${session.user.name}` : `Session Expired`}
                    </p>
                  </div>
                ) : (
                  <User className="cursor-pointer" />
                )}
              </Link>
              <Logout />
            </div>
          ) : (
            <Link href="/auth">
              <div className="flex items-center gap-2">
                <User className="cursor-pointer" />
                <p className="lg:flex none">Login</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
