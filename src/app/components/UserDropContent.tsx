'use client'
import Link from "next/link"
import { signOut } from "next-auth/react"
import { useUserStore } from "../store/User"

export default function UserDropContent(){
    const onSignOut = async () => {
        signOut({ redirect: true, callbackUrl: '/' });
    }
    const userStore: any = useUserStore();
    const user: any = userStore.user;
    return (
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow border menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {
                user && 
                <div>
                    <li>
                        <Link href={'/profil'}>
                            Můj profil
                        </Link>
                    </li>
                    <li onClick={()=>onSignOut()}>
                        <a>Odhlásit se</a>
                    </li>
                </div>
            }
            {
                !user &&
                <div>
                    <li>
                        <Link href={'/profil/prihlasit-se'}>
                            Přihlásit se
                        </Link>
                    </li>
                    <li>
                        <Link href={'/profil/registrovat'}>
                            Registrovat se
                        </Link>
                    </li>
                </div>
            }
        </ul>
    )
}