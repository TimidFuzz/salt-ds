// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type BE_SharpProps = CountrySymbolProps;

const BE_Sharp = forwardRef<SVGSVGElement, BE_SharpProps>(function BE_Sharp(
  props: BE_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="BE_Sharp"
      aria-label="Belgium"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-BE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-BE-a)`}>
        <path fill="#31373D" d="M0 0h24v50H0z" />
        <path fill="#F1B434" d="M24 0h24v50H24z" />
        <path fill="#DD2033" d="M48 0h24v50H48z" />
      </g>
    </CountrySymbol>
  );
});

export default BE_Sharp;
