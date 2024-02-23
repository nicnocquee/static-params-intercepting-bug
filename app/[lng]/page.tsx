export default function Home(props: { params: { lng: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Current language: {props.params.lng}</div>
    </main>
  );
}
