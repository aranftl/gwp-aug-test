// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask66IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask66Icon(props: Mask66IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 6"}
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
          "M7.46.878H.44A.439.439 0 11.44 0h7.02a.439.439 0 110 .878zm0 2.195H.439a.439.439 0 110-.878h7.02a.439.439 0 110 .878zM.439 5.266h7.02a.439.439 0 100-.877H.44a.439.439 0 100 .877z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask66Icon;
/* prettier-ignore-end */
