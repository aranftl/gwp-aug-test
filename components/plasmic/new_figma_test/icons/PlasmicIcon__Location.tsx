// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LocationIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LocationIcon(props: LocationIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
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
          "M4.723 7.46h-.03a.678.678 0 01-.63-.497L3.42 4.718l-2.246-.642a.686.686 0 01-.056-1.3L6.53.723a.685.685 0 01.884.884l-2.052 5.41a.675.675 0 01-.639.442zm2.048-6.104L1.36 3.41l2.427.708a.34.34 0 01.233.233l.692 2.426L6.78 1.368l-.01-.01z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LocationIcon;
/* prettier-ignore-end */
