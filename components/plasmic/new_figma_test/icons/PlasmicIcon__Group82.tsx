// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group82Icon(props: Group82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 107 38"}
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
        d={
          "M1 36.933l18.215-4.658 17.242-7.88 17.617-6.572 17.242 2.754L88.708 1l17.542 19.452"
        }
        stroke={"currentColor"}
        strokeWidth={".876"}
      ></path>
    </svg>
  );
}

export default Group82Icon;
/* prettier-ignore-end */
