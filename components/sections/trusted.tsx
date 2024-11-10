import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Trusted() {
  return (
    <section className="mx-auto max-w-7xl py-36">
      <Card className="container relative min-h-[500px] overflow-hidden rounded-3xl bg-[#39179d] px-6 py-12 text-white md:px-8 md:py-16">
        <div className="flex md:gap-12 lg:gap-16">
          {/* left  */}
          <div className="flex w-1/3 items-center justify-center">
            <div className="absolute left-36 top-32 *:size-32">
              <svg
                viewBox="0 0 104 80"
                className="size-[240px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#f1f3f7"
                  d="M1,17.6c0-4.7,1.9-8.8,5.6-12.1c3.7-3.5,8.1-5.3,13.2-5.3c2.1,0,4.4,0.5,6.8,1.4l-0.4-0.4l2.4,1.1h0.4
	c0.8,0.5,1.7,1.1,2.8,1.8c0,0.2,0.4,0.7,1.2,1.4c6.7,5.9,9.4,14.8,8.4,26.6c-1.1,17-11.2,32.4-30.3,46.1c-1.1,0.9-2.3,1.4-3.6,1.4
	c-2.1,0-3.9-0.8-5.2-2.5c-2.4-2.8-2-5.4,1.2-7.8C19.1,58,27.6,45.7,28.9,32.5c-2.9,1.7-6,2.5-9.2,2.5c-5.1,0-9.4-1.7-13.2-5
	C2.8,26.5,1,22.3,1,17.6z M62.8,17.6c0-4.7,1.9-8.8,5.6-12.1c3.7-3.5,8.1-5.3,13.2-5.3c2.1,0,4.4,0.5,6.8,1.4L88,1.3
	c0.8,0.2,1.6,0.6,2.4,1.1h0.4c1.1,0.5,2,1.1,2.8,1.8c0,0.2,0.4,0.7,1.2,1.4c6.7,5.9,9.4,14.8,8.4,26.6c-1.1,17-11.2,32.4-30.3,46.1
	c-1.1,0.9-2.3,1.4-3.6,1.4c-2.1,0-3.7-0.8-4.8-2.5c-2.7-2.8-2.4-5.4,0.8-7.8C80.9,58,89.4,45.7,90.8,32.5c-2.9,1.7-6,2.5-9.2,2.5
	c-5.1,0-9.4-1.7-13.2-5C64.7,26.5,62.8,22.3,62.8,17.6z"
                />
              </svg>
              <div className="absolute inset-0 flex scale-[2] items-center justify-center">
                <Image
                  src="/_static/trusted-by-founders.svg"
                  className="animate-[spin_30s_linear_infinite]"
                  alt="trusted"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
          {/* right  */}
          <div className="flex w-2/3 flex-col justify-between gap-8">
            <blockquote className="max-w-[670px] text-2xl font-semibold leading-normal tracking-tight md:text-3xl md:lg:leading-normal lg:text-5xl lg:leading-normal">
            &quot;We help passionate Founders perfect theirs design & development
              game. Let&apos;s aim for the top together!&quot;
            </blockquote>
          </div>
        </div>
      </Card>
    </section>
  );
}
