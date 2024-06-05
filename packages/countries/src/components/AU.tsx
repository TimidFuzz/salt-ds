// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type AUProps = CountrySymbolProps;

const AU = forwardRef<SVGSVGElement, AUProps>(function AU(props: AUProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AU"
      aria-label="Australia"
      viewBox="0 0 73 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-AU-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36.514" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-AU-a)`}>
        <path fill="#004692" d="M.514 0h72v72h-72z" />
        <path
          fill="#F5F7F8"
          d="m27.514 44 2.215 4.751 5.003-1.186-2.24 4.739 4.022 3.272-5.008 1.158L31.52 62l-4.006-3.295L23.51 62l.014-5.266-5.009-1.158 4.023-3.272-2.24-4.739 5.002 1.186L27.514 44Zm24 3 1.477 3.167 3.335-.79-1.494 3.159 2.682 2.181-3.339.772.01 3.511-2.67-2.197L48.843 59l.01-3.51-3.34-.773 2.682-2.181-1.493-3.16 3.334.791L51.514 47Zm-7-24 1.23 2.64 2.78-.66-1.245 2.633 2.235 1.818-2.782.643.007 2.926-2.225-1.83L42.29 33l.008-2.926-2.783-.643 2.235-1.818-1.245-2.632 2.78.659 1.23-2.64Zm10-8 1.23 2.64 2.78-.66-1.245 2.633 2.235 1.818-2.782.643.007 2.926-2.225-1.83L52.29 25l.008-2.926-2.783-.643 2.235-1.818-1.245-2.632 2.78.659 1.23-2.64Zm10 10 1.23 2.64 2.78-.66-1.245 2.633 2.235 1.818-2.782.643.007 2.926-2.225-1.83L62.29 35l.008-2.926-2.783-.643 2.235-1.818-1.245-2.632 2.78.659 1.23-2.64Z"
        />
        <circle cx="57.014" cy="38.5" r="2.5" fill="#F5F7F8" />
        <mask
          id={`${uid}-AU-b`}
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#002F6C" d="M.514 36c0-19.882 16.118-36 36-36v36h-36Z" />
        </mask>
        <g mask={`url(#${uid}-AU-b)`}>
          <path
            fill="#F5F7F8"
            d="m13.037 3.134-2.122 2.121 29.526 29.526 2.121-2.121L13.038 3.134ZM7.38 8.79l-3.536 3.536L33.37 41.852l3.536-3.535L7.38 8.79Z"
          />
          <path
            fill="#DD2033"
            d="m7.38 8.79 3.535-3.535 29.526 29.526-3.535 3.536L7.38 8.79Z"
          />
          <path fill="#F5F7F8" d="M36.514 12v5h-19v19h-5V12h24Z" />
          <path fill="#F5F7F8" d="M36.514-2v5h-31v33h-5V-2h36Z" />
          <path
            fill="#DD2033"
            fillRule="evenodd"
            d="M3.514 36h9V12h24V3h-33v33Z"
            clipRule="evenodd"
          />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default AU;
