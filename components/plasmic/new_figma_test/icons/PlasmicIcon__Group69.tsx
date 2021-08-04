// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group69IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group69Icon(props: Group69IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 11"}
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
        d={
          "M3.2 0c1.657 0 2.81 1.142 2.81 2.804 0 1.668-1.177 2.816-2.851 2.816H1.325v2.916H0V0h3.2zM1.325 4.508h1.52c1.154 0 1.81-.621 1.81-1.698S4 1.118 2.851 1.118H1.325v3.39zm5.031 2.26c0-1.089.834-1.757 2.313-1.84l1.703-.1v-.48c0-.692-.467-1.106-1.248-1.106-.74 0-1.2.355-1.313.911H6.604c.071-1.124 1.03-1.952 2.568-1.952 1.508 0 2.472.798 2.472 2.047v4.288H10.42V7.513h-.03c-.36.692-1.147 1.13-1.964 1.13-1.218 0-2.07-.757-2.07-1.875zm4.016-.562v-.491l-1.532.094c-.763.054-1.195.39-1.195.923 0 .544.45.9 1.136.9.893 0 1.591-.616 1.591-1.426zm2.429 4.619V9.79c.095.024.308.024.414.024.592 0 .911-.249 1.107-.888 0-.011.112-.378.112-.384l-2.248-6.23h1.384l1.574 5.065h.023l1.574-5.064h1.349L15.759 8.86c-.532 1.509-1.148 1.994-2.437 1.994-.107 0-.426-.012-.52-.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group69Icon;
/* prettier-ignore-end */
