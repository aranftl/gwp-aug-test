// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill26Icon(props: Fill26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 7"}
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
          "M.16 6.604h1.13V2.17H.16v4.434zM.716 0c.414 0 .735.286.735.665 0 .379-.32.665-.735.665C.302 1.33 0 1.016 0 .665 0 .315.302 0 .716 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill26Icon;
/* prettier-ignore-end */
