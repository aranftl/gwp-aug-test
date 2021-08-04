// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask39IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask39Icon(props: Mask39IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 5"}
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
          "M6.208.73H.366a.365.365 0 110-.73h5.842a.365.365 0 110 .73zm0 1.828H.364a.365.365 0 110-.73h5.842a.365.365 0 110 .73zM.364 4.378h5.842a.365.365 0 100-.73H.365a.365.365 0 100 .73z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask39Icon;
/* prettier-ignore-end */
