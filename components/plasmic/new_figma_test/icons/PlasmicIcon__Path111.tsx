// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path111IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path111Icon(props: Path111IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 13 13"}
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
          "M7.974 6.454l4.618-4.618A1.075 1.075 0 1011.07.316L6.454 4.932 1.836.315a1.074 1.074 0 10-1.52 1.521l4.617 4.618-4.618 4.618a1.075 1.075 0 101.521 1.52l4.618-4.617 4.617 4.618a1.073 1.073 0 001.52 0c.421-.42.421-1.1 0-1.521L7.975 6.454z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path111Icon;
/* prettier-ignore-end */
