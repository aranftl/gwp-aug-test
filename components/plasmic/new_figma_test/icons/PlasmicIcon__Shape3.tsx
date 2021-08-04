// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Shape3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Shape3Icon(props: Shape3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 171 32"}
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
          "M152.045 8.608h-5.54l-5.547 6.481h-.095V0h-4.296v24.228h4.296v-7.704h.095l5.755 7.704h5.653l-6.688-8.537 6.367-7.083zM12.676 10.594h.096V8.611h4.14v23.312h-4.297v-9.57h-.064c-1.096 1.247-2.988 2.318-5.001 2.318-4.435 0-7.55-3.495-7.55-8.312 0-4.745 3.375-8.187 7.756-8.187 2.67 0 4.313 1.748 4.92 2.422zm41.479 10.392c-2.615 0-3.934-2.346-3.934-4.615 0-2.268 1.43-4.515 3.809-4.515 1.113 0 2.521.562 3.074 1.35l2.769-2.77c-1.34-1.418-3.477-2.264-5.843-2.264-4.816 0-8.31 3.47-8.31 8.25 0 4.857 3.455 8.25 8.404 8.25 2.355 0 4.53-.692 5.82-2.085l-2.692-2.902c-.623.76-1.927 1.302-3.097 1.302zm115.032-.303c-.988 0-1.788.796-1.788 1.788s.8 1.771 1.788 1.771a1.77 1.77 0 001.788-1.771c0-.993-.8-1.788-1.788-1.788zm.008.77c.376 0 .745.158.745.591l-.001-.001c0 .291-.18.48-.462.543l.541.883h-.439l-.471-.843h-.258v.843h-.361v-2.016h.706zm-.345.309v.574h.29c.204 0 .44-.055.44-.299 0-.22-.212-.275-.401-.275h-.329zm-1.169.703c0 .826.674 1.511 1.505 1.511.832 0 1.506-.685 1.506-1.511 0-.835-.674-1.512-1.506-1.512-.831 0-1.505.677-1.505 1.512zM42.965 24.229H38.67V8.61h4.297v15.62zm-12.108-7.056c0 1.836-1.191 3.812-3.412 3.812-1.713 0-2.626-1.227-2.626-3.75V8.61H20.52v9.694c0 3.226 1.604 6.366 5.89 6.366 2.022 0 3.716-1.598 4.569-2.778h.064v2.338h4.108V8.61h-4.296v8.564h.001zM8.601 20.982c-2.657 0-4.167-2.328-4.167-4.627 0-2.2 1.386-4.566 4.167-4.566 2.556 0 4.139 2.403 4.139 4.628 0 2.244-1.548 4.565-4.14 4.565zm89.42-4.623c0-4.744 3.548-8.187 8.436-8.187s8.436 3.443 8.436 8.187c0 4.876-3.627 8.355-8.436 8.355s-8.436-3.446-8.436-8.355zm8.436 4.623c-2.802 0-4.078-2.398-4.078-4.627 0-2.2 1.276-4.566 4.078-4.566 2.802 0 4.077 2.366 4.077 4.566 0 2.228-1.275 4.627-4.078 4.627h.001zm50.72-8.079c0 .899.779 1.184 2.99 1.714 2.17.523 5.221 1.59 5.221 4.763 0 3.317-2.492 5.327-6.692 5.327-2.501 0-4.94-.954-6.364-2.54l2.608-2.655c.879 1.047 2.507 1.854 3.913 1.854.562 0 2.196-.236 2.196-1.681 0-.981-.865-1.395-3.29-1.962-2.301-.554-4.652-1.462-4.652-4.474 0-3.508 3.265-5.077 6.374-5.077 2.432 0 4.736.86 5.908 2.338l-2.534 2.44c-.566-.759-2.072-1.558-3.405-1.558-.708 0-2.273.272-2.273 1.511zm-73.616-2.587c1.367-1.285 2.814-2.148 4.779-2.148 4.381 0 7.703 3.443 7.703 8.188 0 4.816-3.362 8.312-7.797 8.312-1.996 0-3.92-1.053-4.889-2.648h-.064v2.208h-4.108V0h4.295v10.316h.08zm3.934 10.666c-2.591 0-4.14-2.321-4.14-4.565 0-2.225 1.583-4.628 4.14-4.628 2.78 0 4.162 2.366 4.162 4.566 0 2.299-1.506 4.627-4.162 4.627zM72.027 8.608h5.541l-6.367 7.083 6.688 8.537h-5.653l-5.755-7.704h-.096v7.704H62.09V0h4.296v15.09h.096l5.546-6.482zm53.308-.444c-4.889 0-8.437 3.443-8.437 8.188 0 4.909 3.627 8.354 8.436 8.354s8.436-3.479 8.436-8.354c0-4.745-3.548-8.188-8.436-8.188h.001zm-4.078 8.19c0 2.23 1.276 4.628 4.078 4.628h-.001c2.802 0 4.078-2.399 4.078-4.627 0-2.2-1.276-4.566-4.077-4.566-2.802 0-4.078 2.367-4.078 4.566z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Shape3Icon;
/* prettier-ignore-end */
