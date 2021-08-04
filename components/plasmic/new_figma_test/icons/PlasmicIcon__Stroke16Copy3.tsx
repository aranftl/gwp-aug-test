// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Stroke16Copy3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Stroke16Copy3Icon(props: Stroke16Copy3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 104 1"}
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
          "M103.09 0c-.083 0 0 .082 0 .365 0-.082-.083 0 0 0H.367C.082.365 0 .283 0 .365 0 .082.082 0 .367 0H103.09z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke16Copy3Icon;
/* prettier-ignore-end */
