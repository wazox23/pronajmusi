import Link from "next/link";
import Image from "next/image";
import MainLogoSrc from "@/app/assets/images/logo-pro.png";

export default function SideNavBar() {
    return (
        <div className="drawer">
            <input id="side-nav" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label
                    htmlFor="side-nav"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <nav className="menu p-4 w-72 md:w-96 min-h-full bg-white text-base-content justify-between">
                    <div>
                        <li>
                            <Link href={"/"}>Domů</Link>
                        </li>
                        <li>
                            <Link href={"/inzeraty/pridat"}>
                                Přidat inzerát
                            </Link>
                        </li>
                        <li>
                            <Link href={"/info/o-nas"}>O nás</Link>
                        </li>
                        <li>
                            <Link href={"/kontakt"}>Kontakt</Link>
                        </li>
                        <li>
                            <Link href={"/info/jak-to-funguje"}>
                                Jak to vlastně funguje ?
                            </Link>
                        </li>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            alt="Hlavní logo"
                            src={MainLogoSrc}
                            width={30}
                            height={30}
                        />
                        <span className="text-2xl font-bold ml-2">
                            PronajmuSi
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    );
}
