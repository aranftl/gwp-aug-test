// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TooltipIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TooltipIcon(props: TooltipIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
        opacity={".2"}
        d={
          "M2.343 2.343a8 8 0 1011.315 11.314A8 8 0 002.343 2.343zm5.978 1.013c.675 0 1.216.557 1.216 1.233 0 .675-.558 1.233-1.216 1.233a1.243 1.243 0 01-1.233-1.25c0-.675.557-1.216 1.233-1.216zm1.74 8.258a.809.809 0 01-.17.287c-.439.456-.98.726-1.62.726-.305 0-.592 0-.896-.05-.49-.068-1.114-.676-1.03-1.318l.203-1.317.405-2.297c0-.05.017-.1.017-.152 0-.32-.101-.439-.422-.472-.135-.017-.27-.034-.406-.068-.152-.05-.236-.186-.219-.304.017-.135.101-.22.27-.253.085-.017.186-.017.287-.017h2.331c.287 0 .455.135.455.422 0 .236-.033.473-.084.71-.152.877-.32 1.739-.473 2.617-.05.287-.118.574-.152.86-.017.136 0 .288.034.423.05.186.186.287.372.27.152-.017.303-.067.455-.135.119-.05.22-.135.338-.169.203-.067.355.051.304.237z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TooltipIcon;
/* prettier-ignore-end */
