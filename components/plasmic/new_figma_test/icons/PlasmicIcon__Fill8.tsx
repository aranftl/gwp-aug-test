// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill8Icon(props: Fill8IconProps) {
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
          "M1.37 2.097c.497 0 .728-.416.728-.802 0-.386-.23-.792-.729-.792C.871.503.64.91.64 1.295s.231.802.73.802M1.367 0c.76 0 1.369.52 1.369 1.295 0 .776-.608 1.316-1.369 1.316C.608 2.611 0 2.071 0 1.295S.608 0 1.368 0"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill8Icon;
/* prettier-ignore-end */
