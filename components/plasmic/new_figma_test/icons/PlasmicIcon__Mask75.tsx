// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask75Icon(props: Mask75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
          "M6.364.99a.456.456 0 01.624 0l.623.619a.435.435 0 01.128.31.433.433 0 01-.128.31l-.311.31-1.248-1.24.312-.31zm-5.06 5.508l.384.382.384.382-1.025.255.256-1.019zm4.125-4.58l.623.62.624.62-3.741 3.718-.623-.62-.624-.62L5.43 1.919zM.441 8.557a.423.423 0 00.107-.014l2.494-.62c.013-.003.025-.01.037-.014a.429.429 0 00.166-.1h.002l4.364-4.34.624-.619a1.3 1.3 0 00.386-.93 1.3 1.3 0 00-.386-.929L7.61.371c-.498-.495-1.372-.495-1.87 0l-.624.62L.752 5.33v.002a.44.44 0 00-.1.161c-.004.014-.012.027-.015.041L.013 8.012a.437.437 0 00.428.545zm2.494-2.92a.441.441 0 00.623 0l1.871-1.86a.437.437 0 000-.62.442.442 0 00-.623 0l-1.871 1.86a.436.436 0 000 .62"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask75Icon;
/* prettier-ignore-end */
