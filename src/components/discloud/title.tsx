"use client";

import Image from "next/image";

interface TitleProps {
    width?: number;
    height?: number
}

export function DiscloudTitle({ width=24, height=24 }: TitleProps) {
    return <>
        <Image
            src="/discloud.png"
            alt="discloud logo"
            width={width}
            height={height}
        />
        <p>
            Discloud Docs
        </p>
    </>
}