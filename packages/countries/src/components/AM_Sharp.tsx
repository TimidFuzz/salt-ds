// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AM_SharpProps = CountrySymbolProps;

const AM_Sharp = forwardRef<SVGSVGElement, AM_SharpProps>(function AM_Sharp(
  props: AM_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AM_Sharp"
      aria-label="Armenia"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-AM-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AM-a)`}>
        <path fill="#FF9E42" d="M0 50V34h72v16z" />
        <path fill="#005EB8" d="M0 34V16h72v18z" />
        <path fill="#DD2033" d="M0 16V0h72v16z" />
      </g>
    </CountrySymbol>
  );
});

export default AM_Sharp;
