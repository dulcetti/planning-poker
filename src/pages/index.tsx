import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Home() {
  return (
    <Layout>
      <Seo title="Planning Poker" />
      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <p className="description">
        Get started by editing <code>pages/index.js</code>
      </p>

      <div className="grid">
        <a href="/login" className="card">
          <h3>Login &rarr;</h3>
          <p>Efetue o login nessa página maldita</p>
        </a>
      </div>
    </Layout>
  );
}
