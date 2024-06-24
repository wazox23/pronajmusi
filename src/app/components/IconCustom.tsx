import { AiOutlineCar, AiOutlineTool } from "react-icons/ai"
import { BiLandscape, BiHomeAlt } from "react-icons/bi"
import { HiOutlineDesktopComputer, HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { MdSportsTennis, MdOutlineDryCleaning } from "react-icons/md"
import { BsMusicNoteBeamed, BsGlobe } from "react-icons/bs"
import { Categories } from "../constants/contants"


export default function IconCustom({ iconKey, size }: {iconKey: Categories, size: number}) {
    const getCategoryIcon = (key: Categories) =>{
        let componentToReturn = <BsGlobe size={size} />
        switch (key) { 
            case Categories.HOME:
                componentToReturn = <BiHomeAlt size={size} />;
                break;
            case Categories.AUTO:
                componentToReturn = <AiOutlineCar size={size} />;
                break;
            case Categories.TOOLS:
                componentToReturn = <AiOutlineTool size={size} />;
                break;
            case Categories.LAND:
                componentToReturn = <BiLandscape size={size} />;
                break;
            case Categories.ELECTRO:
                componentToReturn = <HiOutlineDesktopComputer size={size} />;
                break;
            case Categories.SPORT:
                componentToReturn = <MdSportsTennis size={size} />;
                break;
            case Categories.HOME_APPL:
                componentToReturn = <MdOutlineDryCleaning size={size} />;
                break;
            case Categories.MUSIC:
                componentToReturn = <BsMusicNoteBeamed size={size} />;
                break;
            case Categories.OTHER:
                componentToReturn = <HiOutlineDotsCircleHorizontal size={size} />;
                break;
        }
        
        return componentToReturn;
    }
    return (
        <div>{getCategoryIcon(iconKey)}</div>
    )
}