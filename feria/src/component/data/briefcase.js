import axios from "axios";
import RouteList from "../../tools/RouteList";
import { getHeader } from "../../tools/SessionSettings";
export async function getAllCategories(idbriefcase) {
  const response = await axios
    .get(RouteList.api.categories.index + idbriefcase, getHeader())
    .catch((e) => console.log(e));
  return response;
}
export async function getAllBriefcase() {
  const response = await axios
    .get(RouteList.api.briefcase.index, getHeader())
    .catch((e) => console.log(e));
  return response;
}


