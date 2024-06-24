'use client'

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import AddOfferPage from './AddOfferPage';

export default function AddPageSessionWrapper(){
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/profil/prihlasit-se")
        }
    })
    return (
        <AddOfferPage />
    )
}
AddPageSessionWrapper.requireAuth = true;