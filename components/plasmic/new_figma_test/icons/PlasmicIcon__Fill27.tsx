// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill27Icon(props: Fill27IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M0 .13h1.074v.71h.019C1.291.398 1.828 0 2.497 0c1.177 0 1.667.887 1.667 1.792v2.77h-1.13V2.107c0-.526-.123-1.182-.848-1.182-.716 0-1.055.61-1.055 1.2v2.439H0V.129z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill27Icon;
/* prettier-ignore-end */
