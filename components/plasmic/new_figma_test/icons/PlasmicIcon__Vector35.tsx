// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector35Icon(props: Vector35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 9"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12.728 0v2.512a5.039 5.039 0 01-5.024 5.024H0"}
        stroke={"currentColor"}
        strokeWidth={"2.245"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
