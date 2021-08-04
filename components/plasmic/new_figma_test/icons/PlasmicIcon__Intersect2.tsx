// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Intersect2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Intersect2Icon(props: Intersect2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 375 80"}
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
        d={"M375 33.302V79.88H0V30.753C118.453-11.49 256.642-9.808 375 33.302z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Intersect2Icon;
/* prettier-ignore-end */
