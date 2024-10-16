"use client";

import React, { ReactNode, useRef } from "react";
import { Transition } from "react-transition-group";

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const defaultStyle = {
  transition: `all 200ms ease-in-out`,
};

export default function Modal({
  isOpen,
  children,
  className,
}: {
  isOpen: boolean;
  children?: ReactNode;
  className: string;
}) {
  const nodeRef = useRef(null);

  return (
    <Transition in={isOpen} timeout={300} unmountOnExit nodeRef={nodeRef}>
      {(state) => {
        return (
          <div className={className} style={{ ...transitionStyles[state], ...defaultStyle }} ref={nodeRef}>
            {children || "Make some content here"}
          </div>
        );
      }}
    </Transition>
  );
}
