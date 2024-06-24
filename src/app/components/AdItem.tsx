import { Ad, getLocation, TimePeriods, getPrice, AdTypes } from "../constants/contants"
import Image from "next/image"
import IconCustom from "./IconCustom"
import Link from "next/link"
import DeleteAdIcon from "./DeleteAdIcon"

export default function AdItem({item, isUserAd}:{item: Ad, isUserAd: boolean}){
    return ( 
        <div className="card w-95PERC h-95PERC bg-base-100 shadow hover:shadow-xl duration-150 border">
            <figure className="border h-72 flex relative">
                {
                    (item.img && item.img !== "") && 
                    <Image
                        src={item.img}
                        fill={true}
                        sizes="100vw"
                        alt="Picture of the author"
                    />
                }
                {
                    (!item.img || item.img === "") &&
                    <div className="text-indigo-500 ">
                        <IconCustom iconKey={item.category} size={80} />
                    </div>
                }
                <div className="flex items-center p-1 left-0 bottom-0 px-2 m-2 absolute">
                    {
                        item.type !== AdTypes.DEMAND &&
                        <div className="p-1 px-2 bg-secondary text-sm text-center rounded shadow shadow-gray-500 text-white">{getPrice(item.price as number, item.period as TimePeriods)}</div>
                    }
                </div>
                {
                    isUserAd && 
                    <div className="absolute right-0 top-0 p-1">
                        <DeleteAdIcon id={item.id} url={item.img}/>
                    </div>
                }
            </figure>
            <div className="card-body">
                <div className="card-title">
                    <Link href={`/inzeraty/${item.id}`}>
                        <h2 className="text-md line-clamp-1 hover:underline cursor-pointer">{item.title}</h2>
                    </Link>
                </div>
                <p className="line-clamp-1">{item.description}</p>
                <div className="card-actions items-center justify-between mt-4">
                    <h2 className="text-sm ml-1 text-neutral-600">{getLocation(item.location)}</h2>
                    <Link href={`/inzeraty/${item.id}`}>
                        <button className="btn btn-primary text-white btn-sm font-normal">Zjistit více</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}