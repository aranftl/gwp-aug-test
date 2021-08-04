// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill40Icon(props: Fill40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 8"}
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
          "M.19 7.81h1.337V2.567H.189V7.81zM.846 0c.49 0 .869.339.869.787 0 .447-.38.786-.87.786S0 1.202 0 .787C0 .372.357 0 .847 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill40Icon;
/* prettier-ignore-end */
