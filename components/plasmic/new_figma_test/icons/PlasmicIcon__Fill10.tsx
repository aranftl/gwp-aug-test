// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill10Icon(props: Fill10IconProps) {
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
          "M1.369 2.097c.498 0 .728-.416.728-.802 0-.386-.23-.792-.728-.792s-.73.406-.73.792.232.802.73.802m0-2.097c.76 0 1.368.52 1.368 1.295 0 .776-.608 1.316-1.368 1.316C.609 2.611 0 2.071 0 1.295S.608 0 1.369 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill10Icon;
/* prettier-ignore-end */
