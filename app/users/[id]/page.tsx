import useSWR from "swr";
import Image from "next/image";
import axios from "axios";

import { client } from "@/app/lib/sanity";
import { Logout } from "@/app/components/Logout";

async function getUserDetails(userId: string) {
  const query = `*[_type == 'user' && _id == "${userId}"][0] {
    _id,
    name,
    email,
    image,
}`;

  const data = await client.fetch(query);
  return data;
}

const UserDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getUserDetails(params.id);

  return (
    <div className="container mx-auto px-2 md:px-4 py10">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4">
          <div className="md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden">
            <Image
              src={data.image}
              alt={data.name}
              width={143}
              height={143}
              className="img scale-animation rounded-full"
            />
          </div>
          {/* <div className="flex items-center">
            <Logout />
          </div> */}
          <div className="font-normal text-left">
            <h6 className="text-xl font-bold pb-3">{data.name}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
