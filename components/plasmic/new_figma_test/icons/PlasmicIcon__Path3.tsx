// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path3Icon(props: Path3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M1.417.124C1.395.05 1.343 0 1.285 0H.143C.085 0 .033.049.01.124a.265.265 0 00.03.22l.572.806c.028.04.064.06.101.06.037 0 .073-.02.1-.06l.572-.806a.265.265 0 00.031-.22z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path3Icon;
/* prettier-ignore-end */
