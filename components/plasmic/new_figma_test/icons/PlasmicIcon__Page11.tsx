// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Page11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Page11Icon(props: Page11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 63 63"}
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
          "M31.5 0C14.08 0 0 14.08 0 31.5 0 48.873 14.08 63 31.5 63 48.871 63 63 48.92 63 31.5 62.952 14.08 48.871 0 31.5 0zm-1.742 52.118c-2.516 0-4.548-2.052-4.548-4.534V23.768H21a7.68 7.68 0 00-7.694 7.684A7.68 7.68 0 0021 39.136h1.742v4.534H21c-6.774.048-12.242-5.44-12.242-12.17 0-6.777 5.468-12.266 12.242-12.266h8.758v32.884zM42 43.718h-8.758V10.834c2.516 0 4.548 2.052 4.548 4.534v23.768H42a7.68 7.68 0 007.694-7.684A7.68 7.68 0 0042 23.768h-1.742v-4.534H42c6.774 0 12.242 5.489 12.242 12.266 0 6.73-5.516 12.218-12.242 12.218z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Page11Icon;
/* prettier-ignore-end */
