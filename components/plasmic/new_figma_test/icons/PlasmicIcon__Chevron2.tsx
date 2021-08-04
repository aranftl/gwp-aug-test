// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Chevron2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Chevron2Icon(props: Chevron2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 5"}
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
        d={"M4.142 0l4.142 4.685H0L4.142 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Chevron2Icon;
/* prettier-ignore-end */
