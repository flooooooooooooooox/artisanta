import Reveal from "./Reveal";
import SparkleHeading from "./SparkleHeading";
import { processSteps } from "@/lib/site-data";

export default function ProcessSection() {
  return (
    <section className="bg-cream-alt py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-navy">
            <SparkleHeading>Comment ça se passe ?</SparkleHeading>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-navy/70">
            Trois étapes simples, de votre premier contact à un espace impeccable.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative h-full rounded-2xl bg-white p-6 pt-8 text-center shadow-sm ring-1 ring-navy/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy/10 hover:ring-brand/30 active:-translate-y-1.5 active:shadow-xl active:ring-brand/30">
                <span className="absolute -top-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-lg font-bold text-white shadow-md">
                  {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/70">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
