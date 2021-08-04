// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask6Icon(props: Mask6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M6.781 1.831h.905c.747 0 1.356.616 1.356 1.373v4.578c0 .757-.609 1.373-1.356 1.373h-6.33A1.367 1.367 0 010 7.782V3.204c0-.757.609-1.373 1.356-1.373h.904v-.458C2.26.616 2.87 0 3.617 0h1.808c.748 0 1.356.616 1.356 1.373v.458zM1.357 8.239h6.33a.456.456 0 00.452-.458V4.928l-1.361.826a1.345 1.345 0 01-.698.196H2.964c-.246 0-.487-.068-.698-.196l-1.36-.826V7.78c0 .252.202.458.451.458zm0-5.493h6.33c.249 0 .452.205.452.458v.656L6.313 4.97a.447.447 0 01-.233.065H2.964a.444.444 0 01-.232-.066L.905 3.86v-.656c0-.253.203-.458.452-.458zM3.617.914a.456.456 0 00-.452.458v.458h2.712v-.458a.456.456 0 00-.452-.458H3.617z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask6Icon;
/* prettier-ignore-end */
