// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Path110IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Path110Icon(props: Path110IconProps) {
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
          "M6.52 3.009H4.011V.5a.501.501 0 10-1.003 0v2.51H.5a.501.501 0 100 1.003h2.51V6.52a.501.501 0 101.003 0V4.012H6.52a.501.501 0 100-1.003"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path110Icon;
/* prettier-ignore-end */
