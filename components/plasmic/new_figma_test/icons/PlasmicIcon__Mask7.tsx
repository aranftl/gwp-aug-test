// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask7Icon(props: Mask7IconProps) {
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
          "M6.772 1.83h.902c.747 0 1.355.615 1.355 1.371v4.574c0 .756-.608 1.372-1.355 1.372h-6.32A1.365 1.365 0 010 7.775V3.201C0 2.445.608 1.83 1.354 1.83h.903v-.457C2.257.616 2.865 0 3.612 0h1.805c.747 0 1.355.616 1.355 1.372v.457zM1.355 8.231h6.32a.455.455 0 00.452-.457v-2.85l-1.36.826c-.21.128-.451.196-.696.196H2.959a1.34 1.34 0 01-.696-.196l-1.36-.826v2.851c0 .252.203.457.452.457zm0-5.488h6.32c.249 0 .452.205.452.457v.656L6.303 4.965a.446.446 0 01-.232.066H2.959a.443.443 0 01-.232-.066L.904 3.857v-.656c0-.252.202-.457.451-.457zM3.613.914a.455.455 0 00-.452.458v.458H5.87v-.458a.455.455 0 00-.452-.457H3.613z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask7Icon;
/* prettier-ignore-end */
