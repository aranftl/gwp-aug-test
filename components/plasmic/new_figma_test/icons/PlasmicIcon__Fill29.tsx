// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill29IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill29Icon(props: Fill29IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 25"}
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
          "M12.892 10.24H4.118V8.539c0-1.023.007-1.778.16-2.539.15-.732.422-1.365.836-1.915A4.395 4.395 0 018.63 2.342c1.378 0 2.686.637 3.517 1.742.414.55.687 1.183.835 1.915.154.76.16 1.516.16 2.539v1.703h-.25zm4.363 4.396c0-.578.001-1.03-.006-1.325a5.634 5.634 0 00-.072-.863c-.095-.537-.315-1.016-.707-1.41a2.458 2.458 0 00-.965-.596V8.548c0-1.148-.01-2.126-.243-3.171a6.918 6.918 0 00-1.269-2.754A6.776 6.776 0 008.628 0c-2.11 0-4.095.975-5.366 2.623a6.914 6.914 0 00-1.268 2.754C1.76 6.422 1.75 7.4 1.75 8.547v1.895a2.458 2.458 0 00-.965.597c-.392.393-.612.872-.707 1.41a5.601 5.601 0 00-.072.862c-.007.294-.006.747-.006 1.325v5.977c0 .578 0 1.03.006 1.325a5.6 5.6 0 00.072.863c.095.537.315 1.016.707 1.41.391.392.868.613 1.403.71.264.046.537.064.858.072.294.006.744.006 1.32.006h8.523c.576 0 1.026 0 1.32-.006a5.55 5.55 0 00.858-.073c.535-.096 1.012-.317 1.403-.71.392-.393.612-.872.707-1.41.047-.264.065-.538.072-.862.007-.294.006-.747.006-1.325v-5.977z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill29Icon;
/* prettier-ignore-end */
