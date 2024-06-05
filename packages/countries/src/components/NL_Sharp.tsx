// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type NL_SharpProps = CountrySymbolProps;

const NL_Sharp = forwardRef<SVGSVGElement, NL_SharpProps>(function NL_Sharp(
  props: NL_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="NL_Sharp"
      aria-label="Netherlands (the)"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-NL-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-NL-a)`}>
        <path fill="#004692" d="M0 50V34h72v16z" />
        <path fill="#F5F7F8" d="M0 34V16h72v18z" />
        <path fill="#A00009" d="M0 16V0h72v16z" />
      </g>
    </CountrySymbol>
  );
});

export default NL_Sharp;
