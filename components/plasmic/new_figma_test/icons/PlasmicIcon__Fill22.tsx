// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill22Icon(props: Fill22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 4"}
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
          "M.09 3.675h.628V1.208H.09v2.467zM.397 0c.231 0 .41.16.41.37S.628.74.397.74C.168.74 0 .565 0 .37S.168 0 .398 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill22Icon;
/* prettier-ignore-end */
