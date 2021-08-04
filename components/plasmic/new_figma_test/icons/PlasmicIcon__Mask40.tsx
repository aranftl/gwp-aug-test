// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Mask40IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Mask40Icon(props: Mask40IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 9"}
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
          "M3.104 1.459c1.004 0 1.822.817 1.822 1.822v1.457c0 .046.008.092.025.135l.53 1.322H.727l.529-1.322a.365.365 0 00.025-.135V3.28c0-1.005.818-1.822 1.822-1.822m0 5.827a.365.365 0 01-.364-.364h.729a.365.365 0 01-.364.364M.729 6.922h1.283a1.094 1.094 0 002.186 0h1.284a.728.728 0 00.676-.999l-.502-1.257V3.28A2.551 2.551 0 003.47.758V.364a.364.364 0 10-.729 0v.394a2.551 2.551 0 00-2.186 2.52v1.388L.052 5.923a.727.727 0 00.677 1"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Mask40Icon;
/* prettier-ignore-end */
