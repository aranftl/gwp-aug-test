// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector128IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector128Icon(props: Vector128IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 552 385"}
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
          "M551.713 367.905c0 8.971-7.34 16.311-16.311 16.311H16.312C7.34 384.216 0 376.876 0 367.905V16.311C0 7.34 7.34 0 16.311 0h519.097c8.971 0 16.311 7.34 16.311 16.311v351.594h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector128Icon;
/* prettier-ignore-end */
