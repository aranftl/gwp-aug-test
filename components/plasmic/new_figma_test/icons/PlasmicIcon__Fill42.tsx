// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill42Icon(props: Fill42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 9"}
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
          "M1.36 2.742c0 .83.568 1.66 1.526 1.66.991 0 1.593-.787 1.593-1.66 0-.907-.613-1.672-1.582-1.672-.97 0-1.538.743-1.538 1.672zM5.75.152v4.774c0 1.89-.937 3.091-3.02 3.091-.87 0-1.961-.306-2.652-.863l.769-1.016c.512.48 1.203.743 1.871.743 1.293 0 1.694-.764 1.694-1.802v-.382H4.39c-.39.513-1.014.786-1.75.786C1.037 5.483 0 4.238 0 2.753 0 1.233 1.003 0 2.618 0c.747 0 1.449.306 1.839.94h.022V.152h1.27z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill42Icon;
/* prettier-ignore-end */
