import Layout from "./components/layout";
import "./styles/globals.css";

export default function Home() {
  return (
    <Layout>
      <h2 className="text-xl">Ласкаво просимо до мого проєкту!</h2>
      <p>Це основний контент сторінки.</p>
    </Layout>
  );
}
