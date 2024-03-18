"use client";

import Image from "next/image"

import styles from "./GamePreviewImages.module.css"
import { GamePreviewImage } from "@/types/GamePreviewImage"

export default function GamePreviewImages(images: GamePreviewImage[]){

    const imageArray = Object.keys(images).map((src, i)=>{
        return (<Image className={styles.GameImage} src={images[i].imageSrc} alt={images[i].displayName} width={images[i].width} height={images[i].height} key={i} />)
    });     

    return(
        <div className={styles.ImageBox}>
            {
                imageArray
            }
        </div>
    )
}