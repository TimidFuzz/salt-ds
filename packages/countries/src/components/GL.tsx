// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type GLProps = CountrySymbolProps;

const GL = forwardRef<SVGSVGElement, GLProps>(function GL(props: GLProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="GL"
      aria-label="Greenland"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-GL-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle
          cx="36"
          cy="36"
          r="36"
          fill="#D9D9D9"
          transform="rotate(180 36 36)"
        />
      </mask>
      <g mask={`url(#${uid}-GL-a)`}>
        <path fill="#F5F7F8" d="M72 0v36H0V0z" />
        <path
          fill="#DD2033"
          d="M72 36v36H0V36zM30 20c-8.837 0-16 7.163-16 16h32c0-8.837-7.163-16-16-16Z"
        />
        <path
          fill="#F5F7F8"
          d="M30 52c-8.837 0-16-7.163-16-16h32c0 8.837-7.163 16-16 16Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default GL;
