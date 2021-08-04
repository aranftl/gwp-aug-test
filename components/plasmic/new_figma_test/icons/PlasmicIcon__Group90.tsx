// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group90IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group90Icon(props: Group90IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 18"}
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
          "M0 0v17.992h11.03v-2.654H2.683V2.655h27.921v12.683H14.607l-2.683 2.654h21.363V0H0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M22.635 11.994V5.33h4.49v1.365h-2.933v1.252h2.773v1.29h-2.773v1.383h3.103v1.374h-4.66zm-15.977 0V5.33h1.54v5.262h2.454v1.402H6.659zm5.326 0h1.331V5.33h-1.331v6.664zm6.766 0h-1.6L14.646 5.33h1.795l1.534 4.726h.037l1.524-4.726h1.767l-2.552 6.664z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group90Icon;
/* prettier-ignore-end */
