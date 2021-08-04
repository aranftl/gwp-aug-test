// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill32Icon(props: Fill32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 4"}
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
          "M7.692 2.456c0 .333-.18.677-.559.677-.384 0-.45-.37-.45-.666V1.083h-.598v1.56c0 .51.26 1.01.883 1.01.355 0 .64-.224.744-.474h.01v.401h.57V1.083h-.6v1.373zm-3.967-.822h.672V3.58h.599V1.634h.671v-.553H3.725v.553zm5.18 1.946h.6V1.083h-.6V3.58zm1.018-2.499v.553h.672V3.58h.6V1.634h.67v-.553H9.924zm.972-.325c.2 0 .363-.17.363-.378A.37.37 0 0010.895 0a.37.37 0 00-.362.378.37.37 0 00.362.378zM0 3.58h.6V1.083H0V3.58zm2.535-2.57a.814.814 0 00-.744.473h-.01v-.4h-.569v2.496h.6V2.206c0-.333.18-.676.558-.676.385 0 .45.37.45.665V3.58h.599V2.02c0-.51-.26-1.01-.884-1.01zM4.697.756c.2 0 .362-.17.362-.378A.37.37 0 004.697 0a.37.37 0 00-.363.378.37.37 0 00.363.378z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill32Icon;
/* prettier-ignore-end */
