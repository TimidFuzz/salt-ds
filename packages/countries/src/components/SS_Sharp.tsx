// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type SS_SharpProps = CountrySymbolProps;

const SS_Sharp = forwardRef<SVGSVGElement, SS_SharpProps>(function SS_Sharp(
  props: SS_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="SS_Sharp"
      aria-label="South Sudan"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-SS-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-SS-a)`}>
        <path fill="#F5F7F8" d="M0 41V9h72v32z" />
        <path fill="#DD2033" d="M.2 35V15h72v20z" />
        <path fill="#31373D" d="M0 9V0h72v9z" />
        <path fill="#009B77" d="M0 50v-9h72v9z" />
        <path fill="#004692" d="M48 25 0-11v72l48-36Z" />
        <path
          fill="#FBD381"
          d="m12.236 17.636 2.394 6.188-3.896 5.038 6.517-.072 3.78 5.507 1.281-6.585 6.585-1.281-5.507-3.78.072-6.517-5.038 3.896-6.188-2.394Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default SS_Sharp;
