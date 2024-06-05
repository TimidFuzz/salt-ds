// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type PE_SharpProps = CountrySymbolProps;

const PE_Sharp = forwardRef<SVGSVGElement, PE_SharpProps>(function PE_Sharp(
  props: PE_SharpProps,
  ref,
) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="PE_Sharp"
      aria-label="Peru"
      viewBox="0 0 72 50"
      ref={ref}
      sharp
      {...props}
    >
      <mask
        id={`${uid}-PE-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="#D9D9D9" d="M0 0h72v50H0z" />
      </mask>
      <g mask={`url(#${uid}-PE-a)`}>
        <path fill="#DD2033" d="M0 0h72v50H0z" />
        <path fill="#F5F7F8" d="M56 50H16V0h40z" />
        <path
          fill="#009B77"
          fillRule="evenodd"
          d="M18.406 23.435a18.072 18.072 0 0 0-.406 3.82c0 9.94 8.059 18 18 18s18-8.06 18-18c0-1.34-.146-2.644-.423-3.899l-5.664 2.449c.058.475.087.959.087 1.45 0 6.627-5.373 12-12 12s-12-5.373-12-12c0-.463.026-.919.077-1.368l-5.671-2.452Z"
          clipRule="evenodd"
        />
        <path
          fill="#FF9E42"
          d="M26.2 8h20v7.941a14.857 14.857 0 0 1-9.34 13.795L36.2 30l-.661-.264a14.857 14.857 0 0 1-9.34-13.795V8Z"
        />
        <mask
          id={`${uid}-PE-b`}
          x="26"
          y="8"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path
            fill="#005EB8"
            d="M26.2 8h20v7.941a14.857 14.857 0 0 1-9.34 13.795L36.2 30l-.661-.264a14.857 14.857 0 0 1-9.34-13.795V8Z"
          />
        </mask>
        <g mask={`url(#${uid}-PE-b)`}>
          <path fill="#DD2033" d="M26.2 18h20v12h-20z" />
          <path fill="#0091DA" d="M26.2 8h10v10h-10z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default PE_Sharp;
