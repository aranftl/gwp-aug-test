// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask17Icon(props: Mask17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 5"}
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
          "M0 2.013C0 .903.903 0 2.013 0c1.11 0 2.014.903 2.014 2.013 0 1.11-.903 2.014-2.014 2.014A2.016 2.016 0 010 2.013zm.402 0A1.612 1.612 0 102.013.402c-.888 0-1.611.723-1.611 1.61zm1.611.606a.201.201 0 100 .402.201.201 0 000-.402m0-1.611a.605.605 0 00-.586.458.201.201 0 00.39.099.205.205 0 01.196-.154.2.2 0 01.201.2l.002.008-.002.008a.1.1 0 01-.055.09l-.236.117a.201.201 0 00-.111.18v.202a.201.201 0 10.402 0v-.077l.125-.062a.507.507 0 00.278-.465.605.605 0 00-.604-.604"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask17Icon;
/* prettier-ignore-end */
