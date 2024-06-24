import { checkEnvironment } from "../checkEnvironment";
import { Categories, LocationKeys, AdTypes } from "@/app/constants/contants";

export async function getRelatedAds(category: Categories, location: LocationKeys, type: AdTypes, title: string) {
    let params = {
        category: category,
        location: location,
        type: type,
        title: title,
    }
    let result = await fetch(checkEnvironment().concat("/api/ad/getRelatedAds"), {
        method: "POST",
        body: JSON.stringify(params),
        next: {
            revalidate: 600
        }
    })

    if(result.ok){
        let adsJson = await result.json();
        if(adsJson){
            return adsJson.data.relatedAds;
        }
    }

    return []
}