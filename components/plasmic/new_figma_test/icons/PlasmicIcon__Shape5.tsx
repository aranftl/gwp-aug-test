// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape5Icon(props: Shape5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 4"}
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
          "M.132.748A.439.439 0 01.754.13l1.312 1.32c.171.172.17.45-.001.62L.749 3.382a.439.439 0 01-.62-.621l1.006-1.003L.132.748z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape5Icon;
/* prettier-ignore-end */
