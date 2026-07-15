import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center">
      <p className="text-6xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy">Cette page est introuvable</h1>
      <p className="mt-3 text-navy/70">
        La page que vous cherchez n&apos;existe pas ou a été déplacée. Retournez à
        l&apos;accueil ou contactez-nous.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Retour à l&apos;accueil
        </Link>
        <Link href="/contact" className="btn btn-outline">
          Nous contacter
        </Link>
      </div>
    </div>
  );
}
