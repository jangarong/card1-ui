import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface IconProps {
    /**
     * Source image
     */
    src: string;
    /**
     * Alternate text in case src is not available
     */
    alt: string;
    /**
     * Size of the icons
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * URL if the icon is clicked
     */
    href?: string;
}

/**
 * Used for Icons, is based off of the Next.js Image
 */
const Icon = (props: IconProps) => {
    const widthMap = {
        'sm': 32,
        'md': 64,
        'lg': 128
    }
    if (!!props.href) {
        return (
            <Link href={props.href}>
                <Image
                    src={props.src}
                    alt={props.alt}
                    width={!!props.size ? widthMap[props.size] : widthMap['md']}
                    height={!!props.size ? widthMap[props.size] : widthMap['md']}
                />
            </Link>
        );
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
