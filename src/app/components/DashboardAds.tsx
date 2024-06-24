'use client'
import AdItem from "./AdItem"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { getFilterParams, AdApiResult, getUsedParams } from "../constants/contants"
import { listAdsLib } from "../lib/ads/listAdsLib"
import { TbFaceIdError } from "react-icons/tb";
import DashboardSkeletons from "./DashboardSkeletons"
import Link from "next/link"

export default function DashboardAds(){
    const searchParams = useSearchParams();
    const usedParams = getUsedParams(searchParams);
    const queryString = searchParams.get("dotaz");
    const queryLocation = searchParams.get("kraj");
    const queryCategory = searchParams.get("kategorie");
    const queryType = searchParams.get("typ");
    const queryPage = searchParams.get("strana");
    const [adsData, setAdsData] = useState<AdApiResult>({ ads: [], count: 30 });
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data: AdApiResult = await listAdsLib(getFilterParams(queryString || "", queryLocation || "", queryType || "", queryCategory || ""), queryPage || "1") as AdApiResult;
                setAdsData(data);
                setLoaded(true);
            } catch (error) {
                setLoading(false);
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [queryString, queryLocation, queryType, queryCategory, queryPage]);

    return ( 
        <div className="w-full">
            {
                !loading &&
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
                    {adsData.ads.map((ad) => (
                        <div className="flex items-center justify-center" key={ad.id}>
                            <AdItem item={ad} isUserAd={false}/>
                        </div>
                    ))}
                </div>
            }
            {
                loading &&
                <DashboardSkeletons />
            }
            {
                (adsData.ads.length === 0 && !loading && Object.values(usedParams).find(x=>x!=="")) &&
                <div className="flex flex-col w-full items-center justify-center mt-40">
                    <TbFaceIdError size={120} className="text-primary"/>
                    <span className="text-primary my-8 text-2xl">Pro tohle vyhledávání jsme nenašli žádné výsledky</span>
                    <Link href={"/"}>
                        <button className="btn btn-primary text-white font-normal">Přidat inzerát / poptávku</button>
                    </Link>
                </div>
            }
            {
                (adsData.ads.length === 0 && !loading && !Object.values(usedParams).find(x=>x!=="") && loaded) &&
                <div className="flex flex-col w-full items-center justify-center mt-20 md:mt-40">
                    <TbFaceIdError size={120} className="text-primary"/>
                    <span className="text-primary my-8 text-2xl text-center">Zatím tady nemáme žádné inzeráty, buďte první !</span>
                    <Link href={"/inzeraty/pridat"}>
                        <button className="btn btn-primary text-white font-normal">Přidat inzerát / poptávku</button>
                    </Link>
                </div>
            }
        </div>
    )
}