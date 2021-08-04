// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Thumb3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Thumb3Icon(props: Thumb3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M3.94 7.95c2.177 0 3.94-1.78 3.94-3.975C7.88 1.78 6.118 0 3.94 0 1.764 0 0 1.78 0 3.975 0 6.17 1.764 7.95 3.94 7.95z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Thumb3Icon;
/* prettier-ignore-end */
