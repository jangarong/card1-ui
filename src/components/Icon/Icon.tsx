import React from "react";
import Image from "next/image";

export interface IconProps {
    src: string;
    alt: string;
    size?: 'sm' | 'md' | 'lg';
}


const Icon = (props: IconProps) => {
    const widthMap = {
        'sm': 32,
        'md': 64,
        'lg': 128
    }
    return (
        <Image
            src={props.src}
            alt={props.alt}
            width={!!props.size ? widthMap[props.size] : widthMap['md']}
            height={!!props.size ? widthMap[props.size] : widthMap['md']}
        />
    );
};

export default Icon;
