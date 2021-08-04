// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill13Icon(props: Fill13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
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
          "M1.187 5.56H2.25c.613 0 1.489-.12 1.489-.98 0-.683-.48-.923-1.441-.923H1.187V5.56zm0-2.899h1.055c.791 0 1.215-.323 1.215-.886 0-.582-.424-.813-1.319-.813h-.951v1.7zM0 0h2.6c1.008 0 2.044.453 2.044 1.644 0 .739-.47 1.228-1.158 1.431v.02c.838.11 1.441.664 1.441 1.542 0 1.422-1.262 1.902-2.525 1.902H0V0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill13Icon;
/* prettier-ignore-end */
