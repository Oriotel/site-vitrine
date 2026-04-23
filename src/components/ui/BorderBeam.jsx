import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function BorderBeam({
  lightWidth = 200,
  duration = 10,
  lightColor = "#1428C9",
  borderWidth = 2,
  className,
  ...props
}) {
  const pathRef = useRef(null);

  const updatePath = () => {
    if (pathRef.current) {
      const div = pathRef.current;
      div.style.setProperty(
        "--path",
        `path("M 0 0 H ${div.offsetWidth} V ${div.offsetHeight} H 0 V 0")`
      );
    }
  };

  useEffect(() => {
    updatePath();
    window.addEventListener("resize", updatePath);

    return () => {
      window.removeEventListener("resize", updatePath);
    }
  }, []);

  return (
    <div
      style={{
        "--duration": duration,
        "--border-width": `${borderWidth}px`,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none'
      }}
      ref={pathRef}
      className={cn(
        "absolute z-10 h-full w-full rounded-[inherit]",
        "border-[length:var(--border-width)] ![mask-clip:padding-box,border-box]",
        "![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(red,red)]",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 aspect-square bg-[radial-gradient(ellipse_at_center,var(--light-color),transparent,transparent)]"
        style={{
          "--light-color": lightColor,
          "--light-width": `${lightWidth}px`,
          width: "var(--light-width)",
          offsetPath: "var(--path)",
          position: 'absolute'
        }}
        animate={{
          offsetDistance: ["0%", "100%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
