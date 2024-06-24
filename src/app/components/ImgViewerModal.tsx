import { Ad } from "../constants/contants"
import Image from "next/image"
import { useImageSize } from 'react-image-size';

export default function ImgViewerModal({ad}: {ad: Ad}){
    const [dimensions, { loading, error }] = useImageSize(ad.img);
    return (
        <dialog id={ad.id} className="modal">
            <div className="modal-box max-w-70REM max-h-90VH">
                <div className="flex">
                    <Image
                        src={ad.img}
                        layout="responsive"
                        width={dimensions?.width || 500}
                        height={dimensions?.height || 500}
                        alt="Picture of the author"
                    />
                </div>
                <form method="dialog" className="mt-4 flex justify-end">
                    <button className="btn btn-primary text-white font-normal">Zavřít</button>
                </form>
            </div>
        </dialog>
    )
}