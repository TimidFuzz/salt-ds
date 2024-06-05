// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type BS_SharpProps = CountrySymbolProps;

const BS_Sharp = forwardRef<SVGSVGElement, BS_SharpProps>(function BS_Sharp(
  props: BS_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="BS_Sharp"
      aria-label="Bahamas (the)"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-BS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-BS-a)`}>
        <path fill="#3CCBDA" d="M0 50V0h72v50z" />
        <path fill="#FBD381" d="M0 37V13h72v24z" />
        <path fill="#31373D" d="m33 25-48-36v72l48-36Z" />
      </g>
    </CountrySymbol>
  );
});

export default BS_Sharp;
