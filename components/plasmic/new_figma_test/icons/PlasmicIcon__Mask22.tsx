// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask22Icon(props: Mask22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 4"}
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
          "M2.927.455a.21.21 0 01.286 0L3.5.74a.2.2 0 01.059.143.2.2 0 01-.06.142l-.142.143-.574-.57.144-.143zM.599 2.988l.177.175.176.176-.471.117.118-.468zM2.496.883l.287.285.287.285-1.72 1.71-.288-.285-.286-.285 1.72-1.71zM.203 3.935a.194.194 0 00.049-.006l1.147-.286c.006-.001.011-.004.017-.006a.197.197 0 00.076-.046h.001L3.5 1.596l.287-.285a.598.598 0 00.177-.428.598.598 0 00-.177-.427L3.5.17a.627.627 0 00-.86 0l-.287.285L.346 2.45a.202.202 0 00-.046.075l-.007.018-.287 1.14a.201.201 0 00.197.25zm1.146-1.342a.203.203 0 00.287 0l.86-.855a.2.2 0 000-.285.203.203 0 00-.286 0l-.86.855a.2.2 0 000 .285"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask22Icon;
/* prettier-ignore-end */
