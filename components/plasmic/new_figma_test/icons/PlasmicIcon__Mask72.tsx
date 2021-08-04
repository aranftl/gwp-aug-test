// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask72IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask72Icon(props: Mask72IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 7"}
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
          "M5.692 2.65h-2.19V.442A.44.44 0 003.066 0a.44.44 0 00-.438.442V2.65H.437A.44.44 0 000 3.092a.44.44 0 00.438.441h2.189v2.209a.44.44 0 00.438.441.44.44 0 00.438-.441V3.533h2.189a.44.44 0 00.438-.441.44.44 0 00-.438-.442"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask72Icon;
/* prettier-ignore-end */
