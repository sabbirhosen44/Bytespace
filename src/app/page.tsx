import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="bg-primary-600 py-20">
      <Container>
        <h1 className="font-heading font-semibold text-heading-s md:text-heading-l text-white">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mt-4 text-body-l text-white">Satoshi body text test</p>
        <button className="mt-6 rounded-full bg-secondary-500 px-6 py-3 font-body font-medium text-label-m text-neutral-950">
          Search
        </button>
      </Container>
    </main>
  );
}