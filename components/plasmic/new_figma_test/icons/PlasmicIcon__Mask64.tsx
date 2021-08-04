// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask64Icon(props: Mask64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
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

      <circle
        cx={"2.705"}
        cy={"2.705"}
        r={"2.705"}
        fill={"currentColor"}
      ></circle>
    </svg>
  );
}

export default Mask64Icon;
/* prettier-ignore-end */
