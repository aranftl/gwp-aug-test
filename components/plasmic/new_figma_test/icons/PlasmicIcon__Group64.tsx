// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group64Icon(props: Group64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 34"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M26.383 8.444v23.594H2V2h17.823c.656 0 1.312.218 1.75.765l3.935 3.932c.657.437.875 1.092.875 1.747z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.237"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.915 4.075v3.386h3.39c.765 0 1.093-.874.547-1.42L22.337 3.53c-.547-.546-1.422-.219-1.422.546z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"3.237"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8.78 17.072h10.387m-3.719 7.538h3.827M8.78 9.536h3.826"}
        stroke={"currentColor"}
        strokeWidth={"2.158"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group64Icon;
/* prettier-ignore-end */
