import { signOut } from "next-auth/react";
import { ArrowRight, LogOutIcon } from "lucide-react";
export function Logout() {
  return (
    <>
      <div
        className="flex lg:ml-3 cursor-pointer border rounded-sm"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        <p className=" text-sm text-red-500">Sign Out</p>
        <ArrowRight
          size={20}
          color="blue"
          className="text-3xl  lg:flex hidden"
        />
      </div>
    </>
  );
}
