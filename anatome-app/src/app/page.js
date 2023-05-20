import Body from "./Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="main-wrapper">
        <Nav />
        <Header />
        <div class="content">
          <Body />
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </main>
  );
}
