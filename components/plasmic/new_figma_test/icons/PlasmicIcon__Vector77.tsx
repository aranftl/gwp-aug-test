// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector77IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector77Icon(props: Vector77IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
        d={
          "M0 4.583h2.536v-.775H.894V2.57h1.582v-.776H.894V.776h1.642V0H0v4.583z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector77Icon;
/* prettier-ignore-end */
