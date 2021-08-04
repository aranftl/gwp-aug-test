// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type N3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function N3Icon(props: N3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
        d={
          "M.678 0H0v3.72h.52V.683h.01L2.497 3.72h.656V0h-.52v2.974h-.01L.678 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default N3Icon;
/* prettier-ignore-end */
