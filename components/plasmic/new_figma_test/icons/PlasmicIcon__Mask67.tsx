// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask67Icon(props: Mask67IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 10"}
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
          "M3.73 1.755c1.207 0 2.19.982 2.19 2.19v1.75c0 .056.01.111.03.163l.636 1.589H.874l.636-1.59a.44.44 0 00.031-.162v-1.75c0-1.208.982-2.19 2.19-2.19m0 7.003a.438.438 0 01-.438-.437h.876a.438.438 0 01-.438.437m-2.855-.44h1.542c0 .725.59 1.314 1.314 1.314.724 0 1.313-.59 1.313-1.313h1.543a.875.875 0 00.813-1.2l-.604-1.511V3.94A3.066 3.066 0 004.17.91V.439a.438.438 0 10-.876 0V.91A3.066 3.066 0 00.667 3.94v1.667l-.604 1.51a.874.874 0 00.813 1.2"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask67Icon;
/* prettier-ignore-end */
