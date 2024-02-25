import Link from "next/link";

export const dynamicParams = false;

// export async function generateStaticParams() {
//   return ["de", "en", "it", "fr"].map((lng) => ({ lng }));
// }

export default function Home(props: { params: { lng: string } }) {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Current language: {props.params.lng}</div>

      <section className="cards-container">
        {photos.map((id) => (
          <Link
            className="card"
            key={id}
            href={`/${props.params.lng}/photos/${id}`}
            passHref
          >
            {id}
          </Link>
        ))}
      </section>
    </main>
  );
}
