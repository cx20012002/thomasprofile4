"use client";

import { useGSAP } from "@gsap/react";
import React, { HTMLAttributes, memo, ReactNode, useRef } from "react";
import gsap from "gsap";
import {
  followMouseCursor,
  alignToMouseCursor,
} from "@/utils/followMouseCursor";

interface MouseCursorComponentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const MouseCursorComponent = ({
  children,
  className,
  ...rest
}: MouseCursorComponentProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseCursorRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    (context, contextSafe) => {
      const onMouseMove = contextSafe((e: MouseEvent) => {
        followMouseCursor(containerRef, mouseCursorRef, e);
      });

      const onMouseLeave = contextSafe(() => {
        gsap.to(mouseCursorRef.current, {
          opacity: 0,
          duration: 0.3,
        });
      });

      const onMouseEnter = contextSafe((e: MouseEvent) => {
        alignToMouseCursor(containerRef, mouseCursorRef, e);
        gsap.to(mouseCursorRef.current, {
          opacity: 1,
          duration: 0.3,
        });
      });

      if (containerRef.current) {
        containerRef.current.addEventListener("mousemove", onMouseMove);
        containerRef.current.addEventListener("mouseleave", onMouseLeave);
        containerRef.current.addEventListener("mouseenter", onMouseEnter);
      }

      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("mousemove", onMouseMove);
          containerRef.current.removeEventListener("mouseleave", onMouseLeave);
          containerRef.current.removeEventListener("mouseenter", onMouseEnter);
        }

        if (mouseCursorRef.current) {
          gsap.killTweensOf(mouseCursorRef.current);
        }
      };
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={`${className} cursor-none`} {...rest}>
      {children}
      <div
        ref={mouseCursorRef}
        className={`pointer-events-none absolute inset-0 z-20 w-fit h-fit bg-white rounded-sm px-2 py-2 text-xs opacity-0`}
      >Click anywhere</div>
      )
    </div>
  );
};

export default memo(MouseCursorComponent);
