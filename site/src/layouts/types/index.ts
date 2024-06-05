import type { ReactElement } from "react";
import type { LayoutProps as MosaicLayoutProps } from "@jpmorganchase/mosaic-layouts/dist/types";

export interface LayoutProps extends MosaicLayoutProps {
  sidebar?: ReactElement;
  pageTitle?: ReactElement;
  Footer?: ReactElement;
  isMobileView?: boolean;
}
