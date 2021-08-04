// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill24Icon(props: Fill24IconProps) {
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
          "M0 .072h.598v.396h.01C.718.22 1.018 0 1.39 0c.656 0 .928.494.928.997V2.54h-.629V1.172c0-.293-.068-.658-.472-.658-.398 0-.587.34-.587.668V2.54H0V.072z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill24Icon;
/* prettier-ignore-end */
