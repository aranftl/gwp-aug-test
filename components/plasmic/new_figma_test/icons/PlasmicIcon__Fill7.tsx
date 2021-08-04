// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill7Icon(props: Fill7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.38.715a.323.323 0 010-.646.323.323 0 010 .646zM.38 0a.38.38 0 100 .76.38.38 0 000-.76zM.309.356V.234h.07c.04 0 .084.012.084.059 0 .052-.05.063-.093.063H.31zM.539.29C.539.198.461.164.381.164H.23v.431h.076v-.18h.055l.1.18h.094L.44.407C.5.393.539.353.539.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill7Icon;
/* prettier-ignore-end */
