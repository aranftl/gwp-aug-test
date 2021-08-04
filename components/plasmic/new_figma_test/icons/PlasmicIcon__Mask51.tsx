// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask51Icon(props: Mask51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 46"}
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
          "M0 22.72C0 10.192 10.192 0 22.72 0c12.528 0 22.72 10.192 22.72 22.72 0 12.528-10.192 22.72-22.72 22.72C10.192 45.44 0 35.248 0 22.72zm27.588-7.985a2.267 2.267 0 013.117-.78 2.271 2.271 0 01.78 3.117l-8.18 13.632a2.278 2.278 0 01-1.949 1.102 2.272 2.272 0 01-1.606-.665l-5.453-5.453a2.274 2.274 0 010-3.213 2.27 2.27 0 013.213 0l3.396 3.395 6.682-11.136z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask51Icon;
/* prettier-ignore-end */
