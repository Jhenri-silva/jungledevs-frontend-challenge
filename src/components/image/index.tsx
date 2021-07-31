import Image, { ImageProps } from "next/image";
import React from "react";

export default function ImageComponent(props: ImageProps) {
  return <Image {...props}>{props.children}</Image>;
}
