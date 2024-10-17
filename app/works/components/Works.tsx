import WorkCard from "@/app/components/WorkCard";
import { works } from "@/utils/contentStore";
import React from "react";

export default function Works() {
  return (
    <div>
      <section className="grid gap-3 gap-y-5 grid-cols-2">
        {works.map((item, index) => (
          <WorkCard key={index} item={item} />
        ))}
      </section>
    </div>
  );
}
