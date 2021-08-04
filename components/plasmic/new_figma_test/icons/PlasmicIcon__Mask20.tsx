// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask20Icon(props: Mask20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
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
          "M.838.031C.825.012.794 0 .76 0H.084C.05 0 .02.012.006.031-.007.05.001.071.025.086l.338.202c.016.01.038.014.06.014a.119.119 0 00.06-.014L.82.086C.844.072.851.05.838.031"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask20Icon;
/* prettier-ignore-end */
