"use client";
import { useState } from "react";
import Notiflix from "notiflix";

export default function ContactForm() {
    const sendMessage = (e: Event) => {
        e.preventDefault();

        let params = {
            email,
            title,
            message,
        };

        return Notiflix.Notify.success("Děkujeme za odeslání zprávy!");
    };
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="my-10">
            <form>
                <div className="flex flex-col">
                    <span className="text-lg mb-4">Váš email</span>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg mb-4">Nadpis</span>
                    <input
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
                    />
                </div>
                <div className="flex flex-col">
                    <span className="text-lg mb-4">Váš dotaz</span>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        className="min-h-20R border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
                    />
                </div>
                <div className="flex justify-end items-center my-4">
                    <input
                        onClick={(e) => sendMessage(e as any)}
                        type="submit"
                        value="Odeslat"
                        className="text-white bg-black px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 hover:border-indigo-500 duration-150"
                    />
                </div>
            </form>
        </div>
    );
}
