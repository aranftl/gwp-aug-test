// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask8Icon(props: Mask8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 28"}
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
          "M22.334 4.873L15.163.71a5.237 5.237 0 00-5.27 0L2.72 4.873C1.04 5.848 0 7.678 0 9.66v8.12c0 1.982 1.04 3.811 2.721 4.787l7.171 4.161a5.236 5.236 0 005.27 0l7.172-4.16c1.681-.977 2.72-2.806 2.72-4.788V9.66c0-1.983-1.039-3.813-2.72-4.788z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask8Icon;
/* prettier-ignore-end */
