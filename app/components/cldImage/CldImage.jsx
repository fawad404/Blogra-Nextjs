"use client"
import { CldImage } from "next-cloudinary";

const Cldimage = ({ imgSource}) => {
    return (
        <CldImage
                        width="960"
                        height="600"
                        src={imgSource}
                        sizes="100vw"
                        alt="Description of my image"
                      />
    )
}

export default Cldimage;