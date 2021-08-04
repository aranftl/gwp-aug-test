// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill25Icon(props: Fill25IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.64 1.29c0 .39.267.781.718.781.466 0 .75-.37.75-.781 0-.427-.289-.787-.745-.787S.64.853.64 1.29zM2.706.072v2.246c0 .89-.44 1.455-1.421 1.455-.41 0-.923-.144-1.248-.406l.362-.478c.24.226.566.35.88.35.609 0 .797-.36.797-.85V2.21h-.01c-.184.242-.477.37-.823.37C.488 2.58 0 1.994 0 1.295 0 .581.472 0 1.232 0c.351 0 .682.144.865.442h.01v-.37h.598z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill25Icon;
/* prettier-ignore-end */
