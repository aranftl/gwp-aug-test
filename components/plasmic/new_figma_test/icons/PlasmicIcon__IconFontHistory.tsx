// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconFontHistoryIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconFontHistoryIcon(props: IconFontHistoryIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 21"}
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
          "M3.926 14.875v-2.771H5.81v4.94a.943.943 0 01-.942.941H0V16.09h2.48a10.103 10.103 0 01-2.028-6.078c0-2.68 1.033-5.215 2.919-7.11A9.834 9.834 0 019.453 0v1.921a7.883 7.883 0 00-4.752 2.327 8.16 8.16 0 00-2.364 5.764c0 1.778.569 3.464 1.589 4.863zm13.508-8.836a7.8 7.8 0 00-1.343-1.791 7.883 7.883 0 00-4.753-2.327V0a9.834 9.834 0 016.083 2.902 9.877 9.877 0 011.756 2.405l-1.743.732zm-3.552 3.398a1.082 1.082 0 011.202.941 1.079 1.079 0 01-.995 1.163l-3.59.367a1.071 1.071 0 01-1.085-.615c-.013-.026-.026-.026-.038-.052l-2.39-5.006c-.258-.55-.051-1.203.465-1.451.53-.261 1.163-.013 1.42.536l2.106 4.405 2.905-.288zm6.019-2.379l-1.757.732c.207.72.31 1.464.31 2.222a7.88 7.88 0 01-.31 2.222l1.757.732c.284-.94.439-1.934.439-2.954 0-1.02-.155-2.013-.44-2.954zm-3.81 8.732a8.05 8.05 0 01-1.77 1.346l.737 1.777a10.321 10.321 0 002.363-1.777 9.876 9.876 0 001.756-2.405l-1.743-.732c-.362.64-.8 1.242-1.343 1.79zm-5.695 2.379a.954.954 0 000 1.908 9.87 9.87 0 002.918-.445l-.723-1.764c-.71.196-1.446.3-2.195.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconFontHistoryIcon;
/* prettier-ignore-end */
