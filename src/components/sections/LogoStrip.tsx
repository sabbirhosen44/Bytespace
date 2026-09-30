import Image from "next/image";
import { Container } from "@/components/ui/Container";

const logos = [1, 2, 3, 4, 5].map((n) => `/images/logo/logo${n}.png`);

export function LogoStrip() {
    return (
        <section className="bg-neutral-50 py-10 lg:flex lg:h-[202px] lg:items-center lg:py-0">
            <Container>
                <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:flex-nowrap lg:justify-between">
                    {logos.map((src) => (
                        <Image
                            key={src}
                            src={src}
                            alt="Partner logo"
                            width={167}
                            height={41}
                            className="h-10 w-auto select-none"
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}