import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Planning Poker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Header</h1>
      </main>

      <footer>Footer</footer>

      <style jsx>{``}</style>
    </div>
  );
}
