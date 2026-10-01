import Image from "next/image";
import { Check } from "lucide-react";
import { CourseCard } from "@/components/cards/CourseCard";
import { ProgressCard } from "@/components/ui/ProgressCard";
import { StudentsCard } from "@/components/ui/StudentsCard";
import { StatCard } from "@/components/ui/StatCard";
import { courses } from "@/data/courses";
import { growthStats, creatorPoints } from "@/data/growth";

const IMG = "/images/growth";

const blobs = [
    "radial-gradient(340px 240px at 330px 60px, rgba(212,251,32,0.38), transparent)",
    "radial-gradient(260px 260px at 20px 760px, rgba(40,114,255,0.18), transparent)",
    "radial-gradient(280px 280px at 50px 1290px, rgba(203,252,1,0.5), transparent)",
    "radial-gradient(340px 300px at 1330px 1340px, rgba(40,114,255,0.22), transparent)",
    "radial-gradient(300px 300px at 1440px 300px, rgba(40,114,255,0.08), transparent)",
].join(",");

export function GrowthSection() {
    return (
        <section className="bg-[#f9f9fa] [container-type:inline-size]">
            {/* 1460 / 1440 = 101.3889cqw */}
            <div className="lg:relative lg:h-[101.3889cqw]">
                <div
                    style={{ backgroundImage: blobs }}
                    className="flex flex-col gap-16 px-5 py-16 md:px-10 lg:absolute lg:left-0 lg:top-0 lg:block lg:h-[1460px] lg:w-[1440px] lg:origin-top-left lg:p-0 lg:[scale:tan(atan2(100cqw,1440px))]"
                >
                    {/* ===== Growth: text ===== */}
                    <div className="flex flex-col gap-10 lg:absolute lg:left-[121px] lg:top-[194px]">
                        <h2 className="font-heading text-heading-s font-semibold md:text-heading-m">
                            Your Path to Professional
                            <br className="hidden lg:block" /> Growth Starts Here!
                        </h2>
                        <p className="font-body text-body-m text-neutral-600 lg:w-[560px] lg:text-body-l">
                            Explore our curated selection of courses tailored to enhance
                            <br className="hidden lg:block" /> your capabilities and accelerate your career journey.
                            <br className="hidden lg:block" /> Whether you are looking to sharpen specific skills, gain
                            <br className="hidden lg:block" /> industry expertise, or embark on a new career path entirely,
                            <br className="hidden lg:block" /> we have the resources you need.
                        </p>
                        <div className="flex gap-14 lg:mt-[3px]">
                            {growthStats.map((s) => (
                                <div key={s.label}>
                                    <p className="font-body text-[34px] font-normal leading-[1.2] text-primary-600">{s.value}</p>
                                    <p className="mt-px font-body text-body-m text-neutral-600 lg:text-body-l">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ===== Growth: visual (desktop) ===== */}
                    <div className="hidden lg:block">
                        <div className="absolute left-[758px] top-[120px] z-0 w-[372px]">
                            <CourseCard course={courses[0]} />
                        </div>
                        <Image
                            src={`${IMG}/growth-student.png`}
                            alt="Smiling student with a laptop"
                            width={577}
                            height={540}
                            className="absolute left-[758px] top-[132px] z-10 h-auto w-[577px] max-w-none drop-shadow-[20px_30px_40px_rgba(0,0,0,0.18)]"
                        />
                        <ProgressCard
                            style={{ animationDelay: "-3s" }}
                            className="absolute left-[1103px] top-[333px] z-20 h-[138px] w-[232px] animate-float"
                        />
                        <Image
                            src={`${IMG}/squiggle-right.png`}
                            alt=""
                            aria-hidden
                            width={300}
                            height={400}
                            style={{ animationDelay: "-1s" }}
                            className="pointer-events-none absolute left-[1163px] top-[188px] w-[216px] z-30 h-auto max-w-none animate-float"
                        />
                    </div>

                    {/* ===== Creator: visual (desktop) ===== */}
                    <div className="hidden lg:block">
                        <StatCard
                            title="Total Revenue"
                            sub="July 1-28"
                            value="$120.29"
                            progress={55}
                            className="absolute left-[121px] top-[788px] z-0 h-[119px] w-[234px]"
                        />
                        <StatCard
                            title="Year to Date"
                            sub="2023"
                            value="$1,200.38"
                            badge="+12$"
                            className="absolute left-[121px] top-[938px] z-0 h-[135px] w-[134px]"
                        />
                        <Image
                            src={`${IMG}/creator-woman.png`}
                            alt="Smiling creator with a tablet"
                            width={420}
                            height={620}
                            className="absolute left-[48px] top-[749px] z-10 h-auto w-[620px] max-w-none drop-shadow-[20px_30px_40px_rgba(0,0,0,0.18)]"
                        />
                        <Image
                            src={`${IMG}/squiggle-left.png`}
                            alt=""
                            aria-hidden
                            width={300}
                            height={300}
                            style={{ animationDelay: "-2s" }}
                            className="pointer-events-none absolute left-[424px] top-[859px] w-[215px] z-20 h-auto max-w-none animate-float"
                        />
                        <StudentsCard
                            style={{ animationDelay: "-2s", animationDuration: "8s" }}
                            className="absolute left-[404px] top-[1157px] z-20 w-[258px] animate-float"
                        />
                    </div>

                    {/* ===== Mobile visuals ===== */}
                    <div className="flex flex-col gap-10 lg:hidden">
                        <Image src={`${IMG}/growth-student.png`} alt="Smiling student with a laptop" width={600} height={600} className="mx-auto h-auto w-full max-w-[420px]" />
                        <Image src={`${IMG}/creator-woman.png`} alt="Smiling creator with a tablet" width={420} height={620} className="mx-auto h-auto w-full max-w-[320px]" />
                    </div>

                    {/* ===== Creator: text ===== */}
                    <div className="flex flex-col gap-10 lg:absolute lg:left-[741px] lg:top-[848px]">
                        <h2 className="font-heading text-heading-s font-semibold md:text-heading-m">
                            Create &amp; Manage
                            <br className="hidden lg:block" /> Courses Easily.
                        </h2>
                        <p className="font-body text-body-m text-neutral-600 lg:w-[600px] lg:text-body-l">
                            <strong className="font-bold text-neutral-950">ByteSpace</strong> supports individuals or entities in the creation, publication,
                            <br className="hidden lg:block" /> and administration of educational courses.
                        </p>
                        <ul className="flex flex-col gap-4">
                            {creatorPoints.map((p) => (
                                <li key={p} className="flex items-center gap-2.5 font-body text-body-l leading-6 text-neutral-950">
                                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary-600">
                                        <Check className="size-3 text-white" strokeWidth={3} aria-hidden />
                                    </span>
                                    {p}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}