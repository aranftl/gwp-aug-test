// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask45Icon(props: Mask45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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
          "M4.736 2.205H2.915V.368A.366.366 0 002.55 0a.366.366 0 00-.364.368v1.837H.364A.366.366 0 000 2.573c0 .202.163.367.364.367h1.822v1.838c0 .203.163.367.364.367a.366.366 0 00.365-.367V2.94h1.821a.366.366 0 00.365-.367.366.366 0 00-.365-.368"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask45Icon;
/* prettier-ignore-end */
