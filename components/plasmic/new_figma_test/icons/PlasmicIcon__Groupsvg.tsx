// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupsvgIcon(props: GroupsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 34"}
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
          "M26.139 8.33v23.594H1.756V1.886h17.822c.657 0 1.313.219 1.75.765l3.936 3.932c.656.437.875 1.092.875 1.748z"
        }
        stroke={"currentColor"}
        strokeWidth={"3.237"}
        strokeMiterlimit={"10"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M20.672 3.961v3.386h3.39c.765 0 1.093-.873.546-1.42l-2.515-2.512c-.546-.546-1.421-.218-1.421.546z"
        }
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"3.237"}
        strokeMiterlimit={"10"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={"M8.535 16.959h10.388m-3.718 7.538h3.827M8.535 9.422h3.827"}
        stroke={"currentColor"}
        strokeWidth={"2.158"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default GroupsvgIcon;
/* prettier-ignore-end */
