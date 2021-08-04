// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fill1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fill1Icon(props: Fill1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 14"}
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
          "M6.928 5.503H2.213v-.916c0-.55.004-.955.087-1.364.08-.393.226-.733.448-1.029a2.362 2.362 0 011.89-.936c.74 0 1.443.342 1.89.936.222.296.369.636.448 1.03.083.408.087.814.087 1.363v.916h-.135zm2.344 2.362c0-.31 0-.554-.003-.712a3.027 3.027 0 00-.038-.464 1.387 1.387 0 00-.38-.757 1.32 1.32 0 00-.519-.32v-1.02c0-.616-.005-1.142-.13-1.704a3.717 3.717 0 00-.683-1.48A3.641 3.641 0 004.636 0a3.64 3.64 0 00-2.883 1.41c-.339.439-.56.936-.682 1.48-.125.561-.13 1.087-.13 1.703v1.018a1.32 1.32 0 00-.52.32 1.4 1.4 0 00-.38.758 3.01 3.01 0 00-.038.464C0 7.31 0 7.554 0 7.865v3.212c0 .31 0 .554.003.712.004.174.014.321.039.463.051.29.17.547.38.758.21.211.466.33.754.382.141.025.288.034.461.038.158.004.4.004.71.004h4.58c.309 0 .55 0 .708-.004a2.98 2.98 0 00.462-.038c.287-.052.543-.17.754-.382.21-.211.328-.469.38-.758.025-.142.034-.29.038-.463.004-.158.003-.401.003-.712V7.865z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill1Icon;
/* prettier-ignore-end */
