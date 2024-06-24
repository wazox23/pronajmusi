import { checkEnvironment } from "../checkEnvironment";

export async function deleteAd(id: string) {
    let params = {
        id: id,
    }
    let result = await fetch(checkEnvironment().concat("/api/ad/deleteAd"), {
        method: "POST",
        body: JSON.stringify(params),
        next: {
            revalidate: 600
        }
    })

    if(result.ok){
        let adsJson = await result.json();
        if(adsJson){
            return adsJson.data;
        }
    }

    return {}
}