// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type BSProps = CountrySymbolProps;

const BS = forwardRef<SVGSVGElement, BSProps>(function BS(props: BSProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="BS"
      aria-label="Bahamas (the)"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-BS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-BS-a)`}>
        <path fill="#3CCBDA" d="M0 72V0h72v72z" />
        <path fill="#FBD381" d="M0 48V24h72v24z" />
        <path fill="#31373D" d="M48 36 0 0v72l48-36Z" />
      </g>
    </CountrySymbol>
  );
});

export default BS;
