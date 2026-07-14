import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

type Props = {
  title: string;
  before?: string;
  after?: string;
};

export default function BeforeAfterCard({ title, before, after }: Props) {
  if (before && after) {
    return <BeforeAfterSlider title={title} before={before} after={after} />;
  }

  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5">
      <div className="relative aspect-square w-full">
        <Image
          src={before ?? after ?? ""}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <figcaption className="px-4 py-3 text-sm font-medium text-navy">
        {title}
      </figcaption>
    </figure>
  );
}
