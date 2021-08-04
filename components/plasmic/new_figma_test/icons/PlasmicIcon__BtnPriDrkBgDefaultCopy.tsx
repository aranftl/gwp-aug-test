// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BtnPriDrkBgDefaultCopyIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BtnPriDrkBgDefaultCopyIcon(
  props: BtnPriDrkBgDefaultCopyIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 83 19"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M80.537 1H2.669A1.68 1.68 0 001 2.69v14.077c0 .933.747 1.69 1.669 1.69h77.868a1.68 1.68 0 001.668-1.69V2.689c0-.933-.747-1.689-1.668-1.689z"
        }
        stroke={"currentColor"}
        strokeWidth={".499"}
      ></path>
    </svg>
  );
}

export default BtnPriDrkBgDefaultCopyIcon;
/* prettier-ignore-end */
