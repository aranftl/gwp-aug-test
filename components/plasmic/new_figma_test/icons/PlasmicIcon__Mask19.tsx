// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask19Icon(props: Mask19IconProps) {
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
          "M2.617 1.219H1.611V.203A.202.202 0 001.409 0a.202.202 0 00-.201.203V1.22H.201A.202.202 0 000 1.422c0 .112.09.203.201.203h1.007V2.64c0 .112.09.203.201.203a.202.202 0 00.202-.203V1.625h1.006a.202.202 0 00.202-.203.202.202 0 00-.202-.203"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask19Icon;
/* prettier-ignore-end */
