// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask47Icon(props: Mask47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 3"}
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
          "M3.64.225A.367.367 0 003.303 0H.367a.364.364 0 00-.26.622l1.468 1.459a.367.367 0 00.519 0L3.56.622a.363.363 0 00.08-.397"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask47Icon;
/* prettier-ignore-end */
