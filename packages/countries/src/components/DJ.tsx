// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type DJProps = CountrySymbolProps;

const DJ = forwardRef<SVGSVGElement, DJProps>(function DJ(props: DJProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="DJ"
      aria-label="Djibouti"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-DJ-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-DJ-a)`}>
        <path fill="#009B77" d="M0 72V36h72v36z" />
        <path fill="#86C5FA" d="M0 36V0h72v36z" />
        <path fill="#F5F7F8" d="M48 36 0 0v72l48-36Z" />
        <path
          fill="#DD2033"
          d="m20 26-2.98 6.742-7.02.897 5.177 5.064L13.82 46 20 41.833 26.18 46l-1.357-7.297L30 33.64l-7.02-.897L20 26Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default DJ;
