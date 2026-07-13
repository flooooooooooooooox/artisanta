import Image from "next/image";

type Props = {
  title: string;
  before?: string;
  after?: string;
  combined?: string;
};

export default function BeforeAfterCard({ title, before, after, combined }: Props) {
  return (
    <figure className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-navy/5">
      {combined ? (
        <div className="relative aspect-[4/3] w-full">
          <Image src={combined} alt={title} fill className="object-cover" />
        </div>
      ) : before && after ? (
        <div className="grid grid-cols-2">
          <div className="relative aspect-square w-full">
            <Image src={before} alt={`${title} avant nettoyage`} fill className="object-cover" />
            <span className="absolute left-2 top-2 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              Avant
            </span>
          </div>
          <div className="relative aspect-square w-full">
            <Image src={after} alt={`${title} après nettoyage`} fill className="object-cover" />
            <span className="absolute left-2 top-2 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
              Après
            </span>
          </div>
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
