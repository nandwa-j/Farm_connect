import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import Routings from "./routes/Routings";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="pt-[8vh]">
        <Routings />
      </div>
      <Footer />
    </div>
  );
}

export default App;
