// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group67IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group67Icon(props: Group67IconProps) {
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
          "M3.2 0c1.657 0 2.81 1.142 2.81 2.804 0 1.668-1.177 2.816-2.851 2.816H1.325v2.916H0V0h3.2zM1.325 4.508h1.52c1.154 0 1.81-.621 1.81-1.698S4 1.118 2.851 1.118H1.325v3.39zm5.03 2.26c0-1.089.834-1.757 2.313-1.84l1.704-.1v-.48c0-.692-.467-1.106-1.248-1.106-.74 0-1.201.355-1.313.911H6.604c.07-1.124 1.03-1.952 2.567-1.952 1.509 0 2.473.799 2.473 2.047v4.289h-1.225V7.513h-.03c-.36.692-1.147 1.13-1.963 1.13-1.219 0-2.07-.757-2.07-1.875zm4.017-.562v-.491l-1.532.094c-.763.054-1.195.39-1.195.923 0 .544.45.9 1.136.9.893 0 1.591-.616 1.591-1.426zm2.429 4.619V9.79c.094.024.307.024.414.024.591 0 .91-.249 1.106-.887 0-.012.113-.38.113-.385l-2.248-6.23h1.384l1.573 5.065h.024l1.574-5.064h1.349L15.758 8.86c-.532 1.509-1.147 1.994-2.436 1.994-.107 0-.427-.012-.521-.03z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group67Icon;
/* prettier-ignore-end */
