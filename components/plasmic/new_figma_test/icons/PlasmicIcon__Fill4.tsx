// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill4Icon(props: Fill4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 22"}
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
          "M10.966 8.71H3.503V7.263c0-.87.006-1.512.137-2.16a3.968 3.968 0 01.71-1.628 3.739 3.739 0 012.992-1.482c1.171 0 2.284.541 2.99 1.482.353.468.585 1.006.711 1.629.131.647.137 1.289.137 2.16V8.71h-.214zm3.712 3.74c0-.492 0-.877-.005-1.127a4.794 4.794 0 00-.061-.734 2.195 2.195 0 00-.602-1.2 2.09 2.09 0 00-.82-.506V7.27c0-.976-.01-1.808-.208-2.697a5.885 5.885 0 00-1.08-2.343A5.764 5.764 0 007.34 0C5.544 0 3.856.83 2.775 2.231a5.882 5.882 0 00-1.08 2.343c-.198.889-.207 1.72-.207 2.697v1.612a2.09 2.09 0 00-.82.507c-.333.334-.52.742-.602 1.199-.04.225-.055.458-.061.733-.006.251-.005.636-.005 1.128v5.084c0 .492 0 .877.005 1.127.006.275.021.509.061.734.081.457.269.865.602 1.199.332.334.738.522 1.193.604.224.04.457.055.73.061.25.006.633.006 1.123.006h7.25c.49 0 .873 0 1.122-.006.274-.006.506-.021.73-.06.455-.083.861-.27 1.194-.605.333-.334.52-.742.602-1.2.04-.224.055-.458.06-.733.007-.25.006-.635.006-1.127V12.45z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill4Icon;
/* prettier-ignore-end */
