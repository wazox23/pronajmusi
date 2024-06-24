"use client";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { useUserStore } from "../store/User";
import { useState } from "react";

export default function UserProfile() {
    const session = useSession({
        required: true,
        onUnauthenticated() {
            redirect("/profil/prihlasit-se");
        },
    });

    const onSignOut = async () => {
        signOut({ redirect: true, callbackUrl: "/" });
    };

    const userStore: any = useUserStore();
    const user = userStore.user;
    const [email, setEmail] = useState(user ? user.email || "" : "");
    const [name, setName] = useState(user ? user.name || "" : "");
    const [newPassword, setNewPassword] = useState("");

    // Password change function (not connected to the backend yet)
    const onChangePasswordClick = () => {
        console.log("Requested to change password to:", newPassword);
    };

    return (
        <div className="w-10/12 flex flex-col">
            <h1 className="font-semibold text-4xl">Můj profil</h1>
            <div className="flex flex-col w-full mt-10 mb-4">
                <span className="text-lg mb-4">E-mail</span>
                <input
                    readOnly
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
                />
            </div>

            <div className="flex flex-col w-full mb-4">
                <span className="text-lg mb-4">Uživatelské jméno</span>
                <input
                    readOnly
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
                />
            </div>

            <div className="flex flex-col w-full mb-4">
                <span className="text-lg mb-2">Heslo</span>
                <div className="flex flex-row items-center">
                    <input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        placeholder="Nové heslo"
                        className="border px-4 py-2 rounded-l shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 flex-grow mr-2"
                    />
                    <button
                        onClick={onChangePasswordClick}
                        className="text-white bg-black px-4 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150"
                    >
                        Změnit heslo
                    </button>
                </div>
            </div>

            <div className="flex flex-col w-full mb-4">
                <button
                    onClick={() => onSignOut()}
                    className="text-white bg-black px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150"
                >
                    Odhlásit se
                </button>
            </div>
        </div>
    );
}

UserProfile.requireAuth = true;
