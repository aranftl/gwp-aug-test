// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill16Icon(props: Fill16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
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
          "M1.918 1.058c0-.318-.183-.596-.592-.596-.372 0-.671.252-.697.596h1.29zm.625.443H.629c.026.35.352.607.718.607.315 0 .525-.124.666-.32l.42.33c-.247.329-.603.493-1.08.493C.577 2.611 0 2.123 0 1.321 0 .524.572 0 1.332 0c.702 0 1.216.447 1.216 1.336 0 .057 0 .108-.005.165z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill16Icon;
/* prettier-ignore-end */
