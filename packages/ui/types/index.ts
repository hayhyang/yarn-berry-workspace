import { ImgHTMLAttributes } from "react";

export type Size = "large" | "medium" | "small" | "tiny"; // 64, 40, 24, 16

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}
