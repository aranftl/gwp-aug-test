// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask4Icon(props: Mask4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 28"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.98 5.317h0l7.182-4.165a4.747 4.747 0 014.768 0l7.181 4.165h0c1.523.883 2.472 2.544 2.472 4.352v8.127c0 1.807-.949 3.468-2.472 4.352h0l-7.181 4.164h0a4.745 4.745 0 01-4.768 0h0L2.98 22.148h0C1.457 21.264.51 19.602.51 17.796V9.669c0-1.808.948-3.469 2.471-4.352z"
        }
        stroke={"currentColor"}
        strokeWidth={"1.017"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Mask4Icon;
/* prettier-ignore-end */
