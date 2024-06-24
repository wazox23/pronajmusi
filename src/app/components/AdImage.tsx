"use client"

import { Ad, BackgroundOptions } from "../constants/contants"
import ImgViewerModal from "@/app/components/ImgViewerModal";

export default function AdImage({ad}: {ad: Ad}){
    const showImgModal = () =>{
        let modal: any = document.getElementById(ad.id);
        if(modal){
            modal.showModal();
        }
    }
    return (
        <div className="h-60 md:h-96 bg-slate-200 mb-4 rounded shadow flex items-center justify-center cursor-pointer"
            style={{
                backgroundImage: `url("${ad.img}")`,
                backgroundSize: `${ad.backgroundOption || BackgroundOptions.CONTAIN}`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
            onClick={()=>showImgModal()}
        >
            <ImgViewerModal ad={ad} />
        </div>
    )
}