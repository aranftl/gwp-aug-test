// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type N2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function N2Icon(props: N2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
        d={
          "M.564 0H0v3.095h.433V.568h.009l1.635 2.527h.546V0H2.19v2.474h-.008L.564 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default N2Icon;
/* prettier-ignore-end */
