import Image from "next/image";
import BeforeAfterSlider from "./BeforeAfterSlider";

type Props = {
  title: string;
  before?: string;
  after?: string;
  combined?: string;
};

export default function BeforeAfterCard({ title, before, after, combined }: Props) {
  if (before && after) {
    return <BeforeAfterSlider title={title} before={before} after={after} />;
  }

  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5">
      {combined ? (
        <div className="relative aspect-[4/3] w-full">
          <Image src={combined} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="relative aspect-square w-full">
          <Image src={before ?? after ?? ""} alt={title} fill className="object-cover" />
        </div>
      )}
      <figcaption className="px-4 py-3 text-sm font-medium text-navy">
        {title}
      </figcaption>
    </figure>
  );
}
