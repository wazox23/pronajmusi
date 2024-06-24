import Image from "next/image"
import MainLogoSrc from "@/app/assets/images/logo-pro.png"
import Link from "next/link"

export default function Footer(){
    return (
        <div className="bg-white px-8 py-12 flex flex-col md:flex-row justify-center items-center shadow border-t border-t-gray-200">
            <div className="flex items-center">
                <Image alt="Hlavní logo" src={MainLogoSrc} width={30} height={30}/>
                <span className="text-2xl font-bold ml-2">PronajmuSi</span>
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 align-top list-none md:ml-12">
                    <li className="hover:underline">
                        <Link href={"/"}>Domů</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={"/inzeraty/pridat"}>Přidat inzerát</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={"/info/o-nas"}>O nás</Link>
                    </li>
                </div>
                <div className="flex flex-col items-center md:items-start mt-4 md:mt-0 justify-start list-none md:ml-4">
                    <li className="hover:underline">
                        <Link href={"/kontakt"}>Kontakt</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={"/info/jak-to-funguje"}>Jak to vlastně funguje ?</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href={"/profil"}>Můj profil</Link>
                    </li>
                </div>
            </div>
        </div>
    )
}