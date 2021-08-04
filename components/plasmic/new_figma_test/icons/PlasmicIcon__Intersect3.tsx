// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Intersect3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Intersect3Icon(props: Intersect3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 768 65"}
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
          "M768 36.01v28.7H0v-28.7C120.509 12.663 249.664 0 384 0s263.491 12.662 384 36.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Intersect3Icon;
/* prettier-ignore-end */
