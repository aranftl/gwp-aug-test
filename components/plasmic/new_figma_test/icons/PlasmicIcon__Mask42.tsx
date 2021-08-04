// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask42Icon(props: Mask42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M4.663.799a2.735 2.735 0 01.239 3.587l2.276 2.277a.364.364 0 11-.515.515L4.386 4.902c-.487.372-1.07.56-1.655.56-.7 0-1.4-.266-1.932-.799A2.736 2.736 0 01.799.8a2.735 2.735 0 013.864 0zm-3.35.519a2.007 2.007 0 000 2.834 2.005 2.005 0 002.834 0 2.007 2.007 0 000-2.834 2.006 2.006 0 00-2.833 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask42Icon;
/* prettier-ignore-end */
