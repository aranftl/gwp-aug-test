// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask25IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask25Icon(props: Mask25IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 19"}
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
          "M9.59.056C10.641-.004 11.692 0 12.744 0h5.332c1.073 0 2.124-.005 3.175.056.957.054 1.888.17 2.815.43a9.214 9.214 0 014.887 14.476 9.236 9.236 0 01-4.887 3.3c-.927.259-1.858.374-2.814.43-1.052.06-2.103.055-3.155.055h-5.334c-1.071 0-2.122.005-3.175-.055-.955-.056-1.886-.171-2.813-.43a9.237 9.237 0 01-4.888-3.3 9.212 9.212 0 010-11.176 9.233 9.233 0 014.888-3.3C7.703.226 8.634.11 9.589.056z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask25Icon;
/* prettier-ignore-end */
