import './main.css'
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <h1>App</h1>
      <label>env name</label>
      <p>{ process.env.name ?? '<>NONE<>'}</p>
      <Footer />
    </main>
  );
}
