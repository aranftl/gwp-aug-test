// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MaskIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 5"}
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
          "M7.02.167L3.998 3.19.975.167a.57.57 0 10-.808.808l3.427 3.426a.57.57 0 00.807 0L7.828.975A.57.57 0 107.02.167"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskIcon;
/* prettier-ignore-end */
