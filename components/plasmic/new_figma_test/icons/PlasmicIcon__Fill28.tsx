// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill28Icon(props: Fill28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 7"}
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
          "M1.15 2.318c0 .702.48 1.404 1.29 1.404.839 0 1.347-.665 1.347-1.404 0-.766-.518-1.413-1.338-1.413-.819 0-1.3.628-1.3 1.413zM4.86.13v4.036c0 1.598-.791 2.614-2.553 2.614-.735 0-1.658-.258-2.242-.73l.65-.859A2.346 2.346 0 002.3 5.82c1.093 0 1.432-.647 1.432-1.525v-.323h-.019c-.33.435-.857.665-1.479.665C.876 4.636 0 3.583 0 2.327 0 1.044.848 0 2.214 0c.631 0 1.225.258 1.555.794h.018V.13h1.074z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill28Icon;
/* prettier-ignore-end */
