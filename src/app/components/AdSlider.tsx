import { Ad } from "../constants/contants"
import { useKeenSlider } from "keen-slider/react"
import AdItem from "./AdItem"
import "keen-slider/keen-slider.min.css"

export default function AdSlider({items}:{items: Ad[]}){
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 4,
            spacing: 5,
        },
        loop: true
    })
    return ( 
        <div ref={ref} className="keen-slider">
            {items.map((ad) => (
                <div className='keen-slider__slide w-4' key={ad.id}>
                    <AdItem item={ad} isUserAd={false}/>
                </div>
            ))}
        </div>
    )
}