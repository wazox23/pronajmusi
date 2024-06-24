import { checkEnvironment } from "../checkEnvironment";
import { FilterParams } from "@/app/constants/contants";

export async function getAdCount(params: FilterParams) {
  let result = await fetch(checkEnvironment().concat("/api/ad/getAdCount"), {
    method: "POST",
    body: JSON.stringify(params),
    next: {
      revalidate: 600
    }
  })

  if (result.ok) {
    let adsJson = await result.json();
    if (adsJson) {
      return adsJson.data.count;
    }
  }

  return []
}
