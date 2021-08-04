// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask73IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask73Icon(props: Mask73IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M1.823.068C1.795.027 1.728 0 1.653 0H.183C.11 0 .044.027.014.068c-.027.04-.012.088.04.119L.79.625a.259.259 0 00.13.032c.047 0 .094-.01.13-.032l.734-.438c.053-.031.069-.078.04-.12"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask73Icon;
/* prettier-ignore-end */
