// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask14Icon(props: Mask14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M1.715.806c.556 0 1.007.452 1.007 1.007v.805c0 .026.005.051.014.075l.293.73H.402l.292-.73a.202.202 0 00.015-.075v-.805c0-.555.451-1.007 1.006-1.007m0 3.22a.202.202 0 01-.201-.201h.402a.2.2 0 01-.2.2m-1.313-.2h.71a.605.605 0 001.207 0h.71a.402.402 0 00.373-.552l-.278-.694v-.767A1.41 1.41 0 001.917.419V.2a.201.201 0 10-.402 0v.22A1.41 1.41 0 00.307 1.812v.767l-.278.694a.402.402 0 00.374.552"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask14Icon;
/* prettier-ignore-end */
