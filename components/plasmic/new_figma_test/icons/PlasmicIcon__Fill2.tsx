// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill2Icon(props: Fill2IconProps) {
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
          "M.21.395a.178.178 0 010-.357.178.178 0 010 .357zM.21 0a.21.21 0 100 .42.21.21 0 000-.42zM.172.199V.13h.039c.022 0 .047.006.047.032C.258.193.23.2.206.2H.172zm.127-.04C.299.108.255.089.21.089H.128v.239H.17v-.1H.2l.056.1h.052L.244.223C.278.216.3.193.3.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill2Icon;
/* prettier-ignore-end */
