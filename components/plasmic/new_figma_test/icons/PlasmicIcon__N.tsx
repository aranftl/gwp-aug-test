// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NIcon(props: NIconProps) {
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
        d={
          "M.312 0H0v1.71h.24V.315h.004l.904 1.397h.302V0h-.24v1.367h-.004L.312 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default NIcon;
/* prettier-ignore-end */
