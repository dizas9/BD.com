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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Welcome MR. {data.name}
          </h2>
        </div>

        {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((person: any) => (
            <div key={person._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                {person.image ? (
                  <Image
                    src={person.image}
                    alt="Profie image"
                    className="w-full h-full rounded-full object-cover object-center lg:h-full lg:w-full"
                    width={143}
                    height={143}
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>

              <div className="mt-4 flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-lg text-gray-700">
                    {person.name || "Unknown"}
                  </h3>
                  <h3 className="text-lg">
                    Email : <span className=" text-gray-700">{person.email}</span>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default UserDetails;


