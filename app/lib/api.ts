import { client } from "./sanity";

export async function getUserData(userId: string) {
  const query = `*[_type == 'user' && _id == "$userId"][0] {
    _id,
    name,
    email,
    image,
}`;
  const result = await client.fetch(query,{userId});
  console.log(result);
  return result;
}
