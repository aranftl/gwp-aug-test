// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask69IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask69Icon(props: Mask69IconProps) {
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.604.96a3.287 3.287 0 01.287 4.311l2.736 2.736a.437.437 0 11-.62.62L5.271 5.89a3.276 3.276 0 01-1.989.673c-.84 0-1.682-.32-2.322-.96A3.288 3.288 0 01.96.96a3.287 3.287 0 014.644 0zm-4.025.625a2.412 2.412 0 000 3.406 2.41 2.41 0 003.405 0 2.412 2.412 0 000-3.406 2.41 2.41 0 00-3.405 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask69Icon;
/* prettier-ignore-end */
