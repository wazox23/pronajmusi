import { FaUser } from "react-icons/fa";
import Image from "next/image";
import MainLogoSrc from "@/app/assets/images/logo-pro.png"
import SideNavBar from "./SideNavBar";
import { HiMiniBars3 } from "react-icons/hi2";
import MainHeaderSearch from "./MainHeaderSearch";
import UserDrop from "./UserDrop";
import Link from "next/link";

export default function Header(){
    return (
        <header className="p-4 px-8 border-b border-b-gray-200 w-full shadow navbar fixed top-0 z-10 bg-white min-h-20">
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center justify-start w-2/3 md:w-1/3 pt-2">
              <label htmlFor="side-nav" className="drawer-button">
                <HiMiniBars3 size={25} className="mr-2 text-gray-400 hover:text-gray-800 duration-150 cursor-pointer"/>
              </label>
              <Link href={"/"} className="flex items-center cursor-pointer">
                <Image alt="Hlavní logo" src={MainLogoSrc} width={30} height={30}/>
                <span className="text-2xl font-bold ml-2">PronajmuSi</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center justify-center w-1/3">
              <MainHeaderSearch />
            </div>
            <div className="hidden md:flex items-center justify-end w-1/3 pt-2">
              <Link href={'/inzeraty/pridat'}>
                <button className="btn btn-secondary btn-sm text-white font-normal">Přidat inzerát</button>
              </Link>
              <UserDrop />
            </div>
            <div className="flex md:hidden">
              <UserDrop />
            </div>
            <div className="absolute">
              <SideNavBar />
            </div>
          </div>
        </header>
    )
}