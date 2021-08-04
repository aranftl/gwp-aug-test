// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask38Icon(props: Mask38IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 8"}
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
          "M12.071.288L6.874 5.485 1.676.288A.98.98 0 10.288 1.676L6.18 7.568a.98.98 0 001.388 0l5.892-5.892A.98.98 0 1012.07.288"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask38Icon;
/* prettier-ignore-end */
