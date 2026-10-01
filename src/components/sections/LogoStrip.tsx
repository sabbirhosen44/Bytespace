import Image from "next/image";

const logos = [1, 2, 3, 4, 5].map((n) => `/images/logo/logo${n}.png`);

export function LogoStrip() {
  return (
    <section className="bg-neutral-50 py-10 [container-type:inline-size] lg:py-0">
      <div className="lg:relative lg:h-[14.0278cqw]">
        <div className="lg:absolute lg:left-0 lg:top-0 lg:h-[202px] lg:w-[1440px] lg:origin-top-left lg:[scale:tan(atan2(100cqw,1440px))]">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 px-5 lg:absolute lg:left-[154px] lg:top-[81px] lg:w-[1132px] lg:flex-nowrap lg:justify-between lg:gap-0 lg:px-0">
            {logos.map((src) => (
              <Image
                key={src}
                src={src}
                alt="Partner logo"
                width={168}
                height={40}
                className="h-10 w-auto select-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}