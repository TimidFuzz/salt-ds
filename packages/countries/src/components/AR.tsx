// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef } from "react";
import { useId } from "@salt-ds/core";
import { clsx } from "clsx";

import { CountrySymbol, type CountrySymbolProps } from "../country-symbol";

export type ARProps = CountrySymbolProps;

const AR = forwardRef<SVGSVGElement, ARProps>(function AR(props: ARProps, ref) {
  const uid = useId(props.id);

  return (
    <CountrySymbol
      data-testid="AR"
      aria-label="Argentina"
      viewBox="0 0 73 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-AR-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36.743" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-AR-a)`}>
        <path fill="#86C5FA" d="M1 72V0h72v72z" />
        <path fill="#F5F7F8" d="M.743 50V22h72v28z" />
        <path
          fill="#F1B434"
          d="m47.743 36-4.495 2.223 2.393 4.575-4.88-.981L40.142 47l-3.4-3.812L33.343 47l-.619-5.183-4.88.981 2.393-4.576L25.743 36l4.494-2.223-2.393-4.575 4.88.981.62-5.183 3.398 3.812 3.4-3.812.619 5.183 4.88-.981-2.393 4.576L47.743 36Z"
        />
      </g>
    </CountrySymbol>
  );
});

export default AR;
