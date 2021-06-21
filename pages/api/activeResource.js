import axios from "axios";

export default async function activeResource(req, res) {
  const axiosResponse = await axios.get(
    `${process.env.API_URL}/activeresource`
  );
  const resource = axiosResponse.data;

  return res.send(resource);
}
