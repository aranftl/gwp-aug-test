// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask27Icon(props: Mask27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 8"}
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
          "M11.902.284L6.778 5.409 1.653.284a.967.967 0 10-1.37 1.369l5.81 5.809a.966.966 0 001.369 0l5.81-5.81a.967.967 0 10-1.37-1.368"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask27Icon;
/* prettier-ignore-end */
