import axios from "axios";
import RouteList from "../../tools/RouteList";
import { getHeader } from "../../tools/SessionSettings";
export async function getAllbriefcase() {
  const response = await axios.get(RouteList.api.briefcase.index,getHeader());
  return response;
}
