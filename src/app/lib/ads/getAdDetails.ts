import { checkEnvironment } from "../checkEnvironment";

export async function getAdDetails(id: string) {
    let params = {
        id: id,
    }
    let result = await fetch(checkEnvironment().concat("/api/ad/getAd"), {
        method: "POST",
        body: JSON.stringify(params),
        next: {
            revalidate: 600
        }
    })

    if(result.ok){
        let adsJson = await result.json();
        if(adsJson){
            return adsJson.data.ad;
        }
    }

    return {}
}