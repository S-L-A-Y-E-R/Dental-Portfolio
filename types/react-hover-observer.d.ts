// react-hover-observer.d.ts

declare module "react-hover-observer" {
  import * as React from "react";

  class ReactHoverObserver extends React.Component<{
    children: (state: {
      isHovering: boolean;
      hoverRef: React.RefObject<any>;
    }) => React.ReactNode;
  }> {}

  export = ReactHoverObserver;
}
