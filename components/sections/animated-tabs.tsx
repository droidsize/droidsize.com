"use client";

import Image from "next/image";

import { Tabs } from "@/components/ui/AnimatedTabs";

export default function AnimatedTabs() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="relative size-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="b relative mx-auto my-40 flex h-80 w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem]">
      <Tabs
        tabs={tabs}
        containerClassName="your-container-class"
        tabClassName="your-tab-class"
        activeTabClassName="your-active-tab-class"
        contentClassName="your-content-class"
      />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/opengraph-image.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10 mx-auto h-3/5 w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
    />
  );
};