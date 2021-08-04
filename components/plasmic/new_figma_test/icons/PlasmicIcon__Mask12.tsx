// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask12Icon(props: Mask12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 6"}
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
          "M8.743.209L4.979 3.973 1.214.209A.71.71 0 10.21 1.214l4.267 4.267a.71.71 0 001.005 0l4.267-4.267A.71.71 0 108.743.21"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask12Icon;
/* prettier-ignore-end */
