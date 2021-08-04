// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask61IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask61Icon(props: Mask61IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 55"}
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
          "M44.54 9.718l-14.3-8.3a10.445 10.445 0 00-10.512 0l-14.301 8.3C2.074 11.663 0 15.31 0 19.266V35.46c0 3.954 2.074 7.602 5.427 9.549l14.301 8.298a10.442 10.442 0 0010.511 0l14.302-8.298c3.353-1.947 5.426-5.595 5.426-9.549V19.266c0-3.955-2.073-7.603-5.426-9.548z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask61Icon;
/* prettier-ignore-end */
