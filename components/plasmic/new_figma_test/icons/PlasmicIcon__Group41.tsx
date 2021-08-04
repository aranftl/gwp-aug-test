// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group41Icon(props: Group41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 6"}
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
        d={
          "M1.645 0c.85 0 1.444.587 1.444 1.44 0 .858-.605 1.448-1.466 1.448H.681v1.499H0V0h1.645zM.68 2.316h.781c.593 0 .93-.319.93-.872 0-.553-.337-.87-.927-.87H.681v1.742zm2.586 1.162c0-.56.429-.903 1.189-.945l.875-.052v-.246c0-.356-.24-.569-.641-.569-.38 0-.617.183-.675.468h-.62c.036-.577.529-1.003 1.319-1.003.775 0 1.27.41 1.27 1.052v2.204h-.629v-.526H5.34c-.185.356-.59.58-1.009.58-.626 0-1.064-.388-1.064-.963zm2.064-.289v-.252l-.787.049c-.392.027-.614.2-.614.474 0 .28.23.462.583.462.46 0 .818-.316.818-.733zm1.248 2.374V5.03c.049.012.158.012.213.012.304 0 .468-.128.568-.456 0-.006.058-.194.058-.198l-1.155-3.2h.711l.809 2.602h.012l.809-2.603h.693L8.098 4.554c-.273.775-.59 1.024-1.252 1.024a2.54 2.54 0 01-.268-.015z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group41Icon;
/* prettier-ignore-end */
