import { checkEnvironment } from "../checkEnvironment";

export async function getDashboardAdsLib() {
    let result = await fetch(checkEnvironment().concat("/api/ad/getDashboardAds"), {
        method: "POST",
        next: {
            revalidate: 600
        }
    })

    if(result.ok){
        let demandsJson = await result.json();
        if(demandsJson){
            return demandsJson.data.ads;
        }
    }

    return []
}