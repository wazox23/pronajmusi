import { checkEnvironment } from "../checkEnvironment";
import { FilterParams, Ad } from "@/app/constants/contants";

export async function listAdsLib(params: FilterParams, page: string) {
  let filterParams = {
    params: params || {},
    page: page
  }
  let result = await fetch(checkEnvironment().concat("/api/ad/listAds"), {
    method: "POST",
    body: JSON.stringify(filterParams),
    next: {
      revalidate: 600
    }
  })

  if (result.ok) {
    let adsJson = await result.json();
    if (adsJson) {
      let returnObject = {
        ads: adsJson.data.ads as Ad[],
        count: adsJson.data.count as number
      }
      return returnObject;
    }
  }

  return []
}
