// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group79IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group79Icon(props: Group79IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 552 385"}
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
        opacity={".3"}
        d={
          "M535.402.314c8.82 0 15.997 7.177 15.997 15.997v351.587c0 8.821-7.177 15.998-15.997 15.998H16.312c-8.821 0-15.998-7.177-15.998-15.998V16.311C.314 7.491 7.49.314 16.31.314h519.091zm0-.314H16.312C7.34 0 0 7.34 0 16.311v351.587c0 8.972 7.34 16.312 16.311 16.312h519.097c8.971 0 16.311-7.34 16.311-16.312V16.311C551.713 7.34 544.373 0 535.402 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group79Icon;
/* prettier-ignore-end */
