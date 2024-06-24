"use client"
import { TiDelete } from "react-icons/ti";
import { createId } from '@paralleldrive/cuid2';
import { deleteAd } from "../lib/ads/deleteAd";
import { useUserStore } from "../store/User";
import Notiflix from 'notiflix';
import { storage } from "@/app/firebase";
import { deleteObject, ref } from "firebase/storage";

export default function DeleteAdIcon({id, url}:{id: string, url: string}){
    const showModal = () =>{
        let modal: any = document.getElementById(modalId);
        if(modal){
            modal.showModal();
        }
    }
    const deleteItem = async() => {
        const result = await deleteAd(id);
        if(result && result.result){
            if(url && url !== ""){
                const imageRef = ref(storage, url);
                await deleteObject(imageRef).then(() => {
                    Notiflix.Notify.success('Obrázek k inzerátu smazán');
                }).catch((err) =>{
                    Notiflix.Notify.failure('Nepodařilo se smazat obrázek k inzerátu');
                })
            }
            userStore.deleteAd(id);
            Notiflix.Notify.success('Inzerát smazán');
        } else {
            Notiflix.Notify.failure('Inzerát se nepodařilo smazat');
        }
    }
    const modalId = createId();
    const userStore: any = useUserStore();

    return (
        <div>
            <div className="text-red-300 hover:text-red-700 duration-150 cursor-pointer" onClick={() => showModal()}>
                <TiDelete size={40} />
            </div>

            <dialog id={modalId} className="modal">
                <div className="modal-box">
                    <div className="flex items-center justify-center my-8">
                        Opravdu chcete odstranit tenhle inzerát ?
                    </div>
                    <form method="dialog" className="mt-4 flex justify-end">
                        <button className="btn btn-secondary btn-sm text-white font-normal mr-2">Zavřít</button>
                        <button className="btn btn-primary btn-sm text-white font-normal" onClick={() => deleteItem()}>Potvrdit</button>
                    </form>
                </div>
            </dialog>
        </div>
    )
}