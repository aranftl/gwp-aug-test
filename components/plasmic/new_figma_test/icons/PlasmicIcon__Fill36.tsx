// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill36Icon(props: Fill36IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
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
          "M0 0h1.337v5.221h.034l2.027-2.206h1.716l-2.318 2.37L5.26 8.257H3.487L1.371 5.571h-.034v2.686H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill36Icon;
/* prettier-ignore-end */
