'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSession, signIn } from "next-auth/react"
import { useUserStore } from "../../store/User"
import { getUserAds } from "@/app/lib/user/getUserAds";
import { FcGoogle } from "react-icons/fc";
import { FaSquareFacebook, FaApple, FaSquareXTwitter } from "react-icons/fa6";

export default function LoginForm() {
    const logIn = async () => {
        const result = await signIn('credentials', { email, password, redirect: false });
        if(result?.ok){
            let session: any = await getSession();
            if (session) {
                let userId = session.user.uid;
                if (userId) {
                    let params = {
                        id: userId,
                    }
                    let userData = await fetch("/api/user/getUser", {
                        method: "POST",
                        body: JSON.stringify(params)
                    })

                    if (userData.ok) {
                        let userDataJson = await userData.json();
                        if (userDataJson) {
                            userStore.setUser(userDataJson.data.user);
                            await getUserAdsStore(userId)
                            router.push("/profil")
                        }
                    }
                }
            }
        } else if (result?.error){
            console.error(result.error);
        }
    }

    const getUserAdsStore = async (userId: any) => {
        if (userStore) {
            if (!userStore.user) {
                if (userId) {
                    let result = await getUserAds(userId);
                    if (result) {
                        userStore.setAds(result);
                    }
                }
            }
        }

    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const userStore: any = useUserStore();


    return (
        <div className="w-11/12 md:w-4/12 flex flex-col bg-white p-10 pb-20 rounded shadow-xl">
            <div className="flex flex-col w-full" >
                <span className="text-lg mb-4">E-mail</span>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" placeholder="ukazka@email.cz"/>
            </div>
            <div className="flex flex-col w-full" >
                <span className="text-lg mb-4">Password</span>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" placeholder="********"/>
            </div>
            <div className="flex flex-col w-full mb-4 mt-16" >
                <button onClick={() => logIn()} className="text-white  px-8 py-2 cursor-pointer rounded duration-150 btn btn-primary font-normal">Přihlásit se</button>
            </div>
            <div className='flex flex-col my-4'>
                <span className='my-2 text-neutral-600'>Nebo se přihlaste přes</span>
                <div className='flex items-center justify-around'>
                    <div className='cursor-pointer p-4 hover:shadow border rounded-lg'>
                        <FcGoogle className="text-4xl md:text-6xl" />
                    </div>
                    <div className='text-blue-700 cursor-pointer p-4 hover:shadow border rounded-lg'>
                        <FaSquareFacebook className="text-4xl md:text-6xl" />
                    </div>
                    <div className='text-gray-600 cursor-pointer p-4 hover:shadow border rounded-lg'>
                        <FaApple className="text-4xl md:text-6xl"/>
                    </div>
                    <div className='cursor-pointer p-4 hover:shadow border rounded-lg'>
                        <FaSquareXTwitter className="text-4xl md:text-6xl" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mb-4 mt-10" >
                <p className="text-center text-slate-500">Nemáte ještě účet?</p>
            </div>
            <div className="flex flex-col w-full mb-4" >
                <button onClick={() => router.push("/profil/registrovat")} className="text-white px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150 btn btn-secondary font-normal">Registrovat se</button>
            </div>
        </div>
    )
}
