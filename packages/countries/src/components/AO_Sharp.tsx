// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AO_SharpProps = CountrySymbolProps;

const AO_Sharp = forwardRef<SVGSVGElement, AO_SharpProps>(function AO_Sharp(
  props: AO_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AO_Sharp"
      aria-label="Angola"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-AO-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-AO-a)`}>
        <path fill="#31373D" d="M0 50V25h72v25z" />
        <path fill="#DD2033" d="M0 25V0h72v25z" />
        <path
          fill="#F1B434"
          d="m29.6 13-1.49 3.371-3.51.449 2.589 2.532-.68 3.648 3.091-2.083L32.69 23l-.678-3.648L34.6 16.82l-3.51-.449L29.6 13Z"
        />
        <path
          fill="#F1B434"
          d="M49.313 32.856C53.73 25.204 51.109 15.418 43.456 11a15.93 15.93 0 0 0-10.13-2.002l-.294 4.69a11.387 11.387 0 0 1 8.139 1.271c5.466 3.156 7.339 10.146 4.183 15.612-.135.233-.277.46-.425.68L34.1 25l-.5.866a4 4 0 0 0 1.464 5.464l6.02 3.476a11.423 11.423 0 0 1-11.342-.052 11.387 11.387 0 0 1-5.2-6.51l-3.9 2.656a15.931 15.931 0 0 0 6.814 7.813c5.88 3.395 13.02 2.633 18.016-1.374l9.215 5.32 2.5-4.33-8.292-4.787c.144-.224.283-.453.418-.686ZM21.616 16.83l-.032.054.016-.028.016-.027Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default AO_Sharp;
