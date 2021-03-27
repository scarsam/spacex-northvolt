import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased bg-space-dark text-white">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
