// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask54Icon(props: Mask54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 10"}
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
          "M14.157.338L8.062 6.433 1.966.338A1.15 1.15 0 10.338 1.966l6.91 6.91a1.148 1.148 0 001.628 0l6.91-6.91A1.15 1.15 0 1014.157.338"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask54Icon;
/* prettier-ignore-end */
