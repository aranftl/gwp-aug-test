// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group50Icon(props: Group50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 466 326"}
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
        opacity={".2"}
        d={
          "M449.171.261c8.78 0 15.922 7.141 15.922 15.922v293.606c0 8.78-7.142 15.922-15.922 15.922H16.183c-8.78 0-15.922-7.142-15.922-15.922V16.183C.261 7.403 7.402.261 16.183.261h432.988zm0-.261H16.183C7.283 0 0 7.282 0 16.183v293.606c0 8.9 7.282 16.183 16.183 16.183h432.993c8.901 0 16.183-7.283 16.183-16.183V16.183C465.354 7.283 458.072 0 449.171 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group50Icon;
/* prettier-ignore-end */
