import { checkEnvironment } from "../checkEnvironment";

export async function getUserAds(id: string) {
    if(id){
        let params = {
            id: id,
        }
        let result = await fetch(checkEnvironment().concat("/api/ad/getForUser"), {
            method: "POST",
            body: JSON.stringify(params),
            cache: "force-cache"
        })

        if(result.ok){
            let demandsJson = await result.json();
            if(demandsJson){
                return demandsJson.data.userAds;
            }
        }
    }
    return [];
}