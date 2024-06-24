'use client'

import { Locations, MainCategoriesSelect, LocationKeys, Categories, BackgroundOptions, TimePeriodArray, TimePeriods, AdTypes, Ad } from "../../../constants/contants";
import { useState } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { storage } from "@/app/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createId } from '@paralleldrive/cuid2';
import { useUserStore } from "../../../store/User"
import { useRouter } from "next/navigation";

export default function AddDemandForm() {
    const uploadFile = async () => {
        await uploadFileHandler() as any;
    }

    const removeFile = () => {
        setImage("");
        setFile(null);
    }

    const uploadFileHandler = async () => {
        return new Promise(resolve => {
            let input = document.createElement('input');
            input.type = 'file';
            input.onchange = (e: any) => {
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target && e.target.result) {
                        setImage(e.target.result as any);
                        setFile(file);
                    }
                }
                reader.readAsDataURL(file);
            }
            input.click();
        });
    }

    const saveAd = async (imgUrl: any) => {
        let newAd: Ad = {
            id: createId(),
            title: title,
            location: selectedLocation,
            category: selectedCategory,
            email: email,
            phone: phone,
            description: description,
            specialInstructions: null,
            dateFrom: null,
            dateTo: null,
            price: parseInt(price as any || 0) || 0,
            period: period,
            type: AdTypes.OFFER,
            userID: user.id || "",
            created: new Date().getTime(),
            img: imgUrl,
            backgroundOption: backgroundOption
        }

        let result = await fetch("/api/ad/addAd", {
            method: "POST",
            body: JSON.stringify(newAd)
        })

        if (!result.ok) {
            throw new Error(result.statusText);
        }

        router.push("/profil")
    }

    const createAd = async (e: any) => {
        e.preventDefault();

        if (!title || !email || !phone) {
            return
        } else {
            if (file) {
                const imageRef = ref(storage, `adImages/${file.name + createId()}`);
                uploadBytes(imageRef, file).then((response) => {
                    if (response) {
                        getDownloadURL(response.ref).then(async (url) => {
                        await saveAd(url);
                        })
                    }
                })
            } else {
                await saveAd(null);
            }
        }
    };

    const [selectedLocation, setSelectedLocation] = useState(LocationKeys.ALL);
    const [selectedCategory, setSelectedCategory] = useState(Categories.ALL);
    const [image, setImage] = useState("");
    const [backgroundOption, setBackgroundOption] = useState(BackgroundOptions.CONTAIN);
    const [price, setPrice] = useState(0);
    const [period, setTimePeriod] = useState(TimePeriods.HOURLY);
    const [file, setFile] = useState(null as any);
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const userStore: any = useUserStore();
    const user = userStore.user;
    const router = useRouter();

    return (
        <form className="mt-10">
            <div className="h-96 bg-slate-200 mb-4 rounded shadow flex items-center justify-center">
                {
                (image && image !== "") &&
                <div className="w-full h-full flex items-center justify-center"
                    style={{
                    backgroundImage: `url("${image}")`,
                    backgroundSize: backgroundOption,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    }}
                >
                    <div className="relative flex items-center justify-center bg-white h-full w-full bg-opacity-0 hover:bg-opacity-30 duration-150 flex-col">
                    <div className="flex items-center">
                        <button onClick={uploadFile} className="flex items-center text-white bg-black px-8 py-2 ml-2 rounded hover:bg-indigo-700 duration-150 shadow">
                        <AiOutlineFileAdd />
                        <span className="ml-2">Nahrát úvodní fotku (volitelné)</span>
                        </button>
                        <button onClick={removeFile} className="flex items-center text-white bg-black px-8 py-2 ml-2 rounded hover:bg-indigo-700 duration-150 shadow">
                        <BsTrash />
                        <span className="ml-2">Smazat fotku</span>
                        </button>
                    </div>

                    <div className="absolute bottom-4 right-4">
                        {
                        backgroundOption === BackgroundOptions.CONTAIN &&
                        <button onClick={e => setBackgroundOption(BackgroundOptions.COVER)} className="flex items-center text-white bg-black px-8 py-2 ml-2 rounded hover:bg-indigo-700 duration-150 shadow">
                            <FiMaximize2 />
                            <span className="ml-2">Roztáhnout na šířku</span>
                        </button>
                        }
                        {
                        backgroundOption === BackgroundOptions.COVER &&
                        <button onClick={e => setBackgroundOption(BackgroundOptions.CONTAIN)} className="flex items-center text-white bg-black px-8 py-2 ml-2 rounded hover:bg-indigo-700 duration-150 shadow">
                            <FiMinimize2 />
                            <span className="ml-2">Ponechat rozměry</span>
                        </button>
                        }
                    </div>

                    </div>
                </div>
                }
                {
                (!image || image === "") &&
                <button onClick={uploadFile} className="flex items-center text-white bg-black px-8 py-2 ml-2 rounded hover:bg-indigo-700 duration-150 shadow">
                    <AiOutlineFileAdd />
                    <span className="ml-2">Nahrát úvodní fotku (volitelné)</span>
                </button>
                }
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg mb-4">Nabízím</span>
                <input onChange={e => setTitle(e.target.value)} required type="text" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center">
                <div className="flex flex-col w-1/2 mr-4">
                    <span className="text-lg mb-4">V kraji</span>
                    <select onChange={e => setSelectedLocation(e.target.value as LocationKeys)} className="pl-4 py-2 border mb-4 px-4 rounded shadow focus:outline-none focus:ring-indigo-500 focus:ring-1 cursor-pointer">
                    {Locations.map((location, index) => (
                        <option
                        key={index}
                        value={location.value}
                        className="flex 
                                            flex-col 
                                            items-center 
                                            justify-center 
                                            py-14 
                                            rounded-xl 
                                            h-24 
                                            border-2 
                                            duration-100
                                            cursor-pointer
                                            shadow-lg"
                        >
                        {location.name}
                        </option>
                    ))}
                    </select>
                </div>
                <div className="flex flex-col w-1/2">
                    <span className="text-lg mb-4">Kategorie</span>
                    <select onChange={e => setSelectedCategory(e.target.value as Categories)} className="pl-4 py-2 border mb-4 px-4 rounded shadow focus:outline-none focus:ring-indigo-500 focus:ring-1 cursor-pointer">
                    {MainCategoriesSelect.map((category, index) => (
                        <option
                        key={index}
                        value={category.key}
                        className="flex 
                                            flex-col 
                                            items-center 
                                            justify-center 
                                            py-14 
                                            rounded-xl 
                                            h-24 
                                            border-2 
                                            duration-100
                                            cursor-pointer
                                            shadow-lg"
                        >
                        {category.name}
                        </option>
                    ))}
                    </select>
                </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center">
                <div className="flex flex-col w-1/2 mr-4">
                    <span className="text-lg mb-4">E-mail</span>
                    <input onChange={e => setEmail(e.target.value)} type="email" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" />
                </div>
                <div className="flex flex-col w-1/2">
                    <span className="text-lg mb-4">Tel. číslo</span>
                    <input onChange={e => setPhone(e.target.value)} type="text" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" />
                </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <span className="text-lg mb-4">Popis</span>
                <textarea onChange={e => setDescription(e.target.value)} className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex items-center">
                <div className="flex flex-col w-1/2 mr-4">
                    <span className="text-lg mb-4">Cena</span>
                    <input value={price} onChange={e => setPrice(e.target.value as any)} type="number" className="border mb-4 px-4 py-2 rounded shadow focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1" />
                </div>
                <div className="flex flex-col w-1/2">
                    <span className="text-lg mb-11"></span>
                    <select onChange={e => setTimePeriod(e.target.value as TimePeriods)} className="pl-4 py-2 border mb-4 px-4 rounded shadow focus:outline-none focus:ring-indigo-500 focus:ring-1 cursor-pointer">
                    {TimePeriodArray.map((period, index) => (
                        <option
                        key={index}
                        value={period.value}
                        className="flex 
                                            flex-col 
                                            items-center 
                                            justify-center 
                                            py-14 
                                            rounded-xl 
                                            h-24 
                                            border-2 
                                            duration-100
                                            cursor-pointer
                                            shadow-lg"
                        >
                        {period.name}
                        </option>
                    ))}
                    </select>
                </div>
                </div>
            </div>

            <div className="flex items-center justify-end mt-8">
                <input onClick={e => createAd(e)} type="submit" value="Přidat nabídku" className="text-white bg-black px-8 py-2 cursor-pointer rounded hover:bg-indigo-700 duration-150" />
            </div>
        </form>
    )
}
