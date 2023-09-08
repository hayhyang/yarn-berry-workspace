import { ImgHTMLAttributes } from "react";

export type Size = "xlarge" | "large" | "medium" | "small" | "xsmall";

export type Variant = "primary" | "warning" | "default";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}
