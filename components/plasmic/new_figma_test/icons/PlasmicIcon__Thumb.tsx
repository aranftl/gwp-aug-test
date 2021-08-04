// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbIcon(props: ThumbIconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M1.812 3.656c1 0 1.812-.819 1.812-1.828A1.82 1.82 0 001.812 0C.812 0 0 .818 0 1.828a1.82 1.82 0 001.812 1.828z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ThumbIcon;
/* prettier-ignore-end */
