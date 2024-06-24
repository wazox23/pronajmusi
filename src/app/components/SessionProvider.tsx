'use client'
import { SessionProvider as Provider } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useEffect } from "react";
import { useUserStore } from "../store/User"
import { getUserAds } from "../lib/user/getUserAds";

type Props = {
    children: React.ReactNode
}

export default function SessionProvider({children}: Props) {
    useEffect(() => {
        const getUserLog = async() =>{
            let session: any = await getSession();
            if(session){
                if(userStore){
                    if(!userStore.user){
                        let userId = session.user.uid;
                        if(userId){
                            let params = {
                                id: userId,
                            }
                            let userData = await fetch("/api/user/getUser", {
                                method: "POST",
                                body: JSON.stringify(params)
                            })

                            if(userData.ok){
                                let userDataJson = await userData.json();
                                if(userDataJson){
                                    userStore.setUser(userDataJson.data.user);
                                }
                            }
                        }
                    }
                }
            }
        }

        const getUserAdsStore = async() =>{
            let session: any = await getSession();
            if(session){
                if(userStore){
                    if(!userStore.user){
                        let userId = session.user.uid;
                        if(userId){
                            let result = await getUserAds(userId);
                            if(result){
                                userStore.setAds(result);
                            }
                        }
                    }
                }
            }
        }


        getUserLog();
        getUserAdsStore();
    }, [])

    const userStore: any = useUserStore();
    
    return (
        <Provider>
            {children}
        </Provider>
    )
}