import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}

export interface FooterFeatProps{
    title: string;
}

export interface FontsFeatProps {
    InterFont: string
}


export interface ImageFeatProps extends FontsFeatProps{
    ImageCar : string
}