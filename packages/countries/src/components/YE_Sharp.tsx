// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type YE_SharpProps = CountrySymbolProps;

const YE_Sharp = forwardRef<SVGSVGElement, YE_SharpProps>(function YE_Sharp(
  props: YE_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="YE_Sharp"
      aria-label="Yemen"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-YE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-YE-a)`}>
        <path fill="#31373D" d="M0 50V34h72v16z" />
        <path fill="#F5F7F8" d="M0 34V16h72v18z" />
        <path fill="#DD2033" d="M0 16V0h72v16z" />
      </g>
    </CountrySymbol>
  );
});

export default YE_Sharp;
