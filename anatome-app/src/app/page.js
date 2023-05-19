import Body from "./Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
