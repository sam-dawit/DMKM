import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Payments from "./pages/Payments";
import Languages from "./pages/Languages";
import SundaySchool from "./pages/SundaySchool";
import Classes from "./pages/SundaySchool/Classes";
import Gallery from "./pages/SundaySchool/Gallery";
import Sermon from "./pages/Sermon";
import Contact from "./pages/Contact";
import "./App.css";
import "./i18n";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/languages" element={<Languages />} />
                        <Route
                            path="/sundaySchool"
                            element={<SundaySchool />}
                        />
                        <Route
                            path="/sundaySchool/classes"
                            element={<Classes />}
                        />
                        <Route
                            path="/sundaySchool/gallery"
                            element={<Gallery />}
                        />
                        <Route path="/sermon" element={<Sermon />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
