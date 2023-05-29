import axios from "axios";

export default async function getRequest(url) {
	let res = await axios.get(url);
	return res.data;
}
