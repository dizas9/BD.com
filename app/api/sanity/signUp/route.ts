import { client } from "@/app/lib/sanity";
import { signUpHandler } from "next-auth-sanity";

export const POST = signUpHandler(client);
