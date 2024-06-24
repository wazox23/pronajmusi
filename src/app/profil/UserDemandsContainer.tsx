'use client'
import { useUserStore } from "../store/User";
import { Ad } from "../constants/contants";
import AdItem from "../components/AdItem";
import Link from "next/link";
import { TbFaceIdError } from "react-icons/tb";

const UserDemands = ({ userDemands }: { userDemands: Ad[] }) =>{
    return (
        <div>
            {
                userDemands.length !== 0 && 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full">
                    {userDemands.map((ad) => (
                        <div className="flex items-center justify-center" key={ad.id}>
                            <AdItem item={ad} isUserAd={true}/>
                        </div>
                    ))}
                </div>
            }
            {
                userDemands.length === 0 && 
                <div className="flex flex-col w-full items-center justify-center">
                    <TbFaceIdError size={120} className="text-primary"/>
                    <span className="text-primary my-8 text-2xl">Zatím tady nemáte žádné inzeráty</span>
                    <Link href={"/inzeraty/pridat"}>
                        <button className="btn btn-primary text-white font-normal">Přidat inzerát / poptávku</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default function UserDemandsContainer() {
    const userStore: any = useUserStore();
    const userDemands = userStore.userAds;
    
    return (
        <div className="flex flex-col">
            <h1 className="font-semibold text-4xl mb-10">Moje inzeráty</h1>
            <UserDemands userDemands={userDemands}/>
        </div>
    )
}