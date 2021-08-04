// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask32Icon(props: Mask32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
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
          "M10.761 2.905h1.435c1.186 0 2.152.978 2.152 2.18v7.263c0 1.202-.966 2.18-2.152 2.18H2.152C.966 14.527 0 13.55 0 12.347V5.085c0-1.202.966-2.18 2.152-2.18h1.435V2.18C3.587.978 4.553 0 5.739 0h2.87c1.186 0 2.152.978 2.152 2.18v.725zM2.152 13.073h10.044a.723.723 0 00.717-.726V7.819l-2.16 1.312c-.334.203-.717.31-1.107.31H4.702a2.13 2.13 0 01-1.107-.31l-2.16-1.312v4.528c0 .4.322.726.717.726zm0-8.716h10.044c.395 0 .717.326.717.726v1.042l-2.898 1.76a.709.709 0 01-.37.104H4.703a.704.704 0 01-.37-.104l-2.897-1.76V5.083c0-.4.322-.726.717-.726zM5.738 1.45a.723.723 0 00-.717.726v.726h4.304v-.726c0-.4-.322-.726-.717-.726h-2.87z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask32Icon;
/* prettier-ignore-end */
