//pages
import Footer from "./components/footer/Footer.jsx";
import Bridge from "./pages/Bridge.jsx";
import Portal from "./pages/Portal.jsx";
import CanvasAndBadges from "./pages/CanvasAndBadges.jsx";
import Header from "./components/header/Header.jsx";
import Ecosystem from "./pages/Ecosystem.jsx";
import Sessions from "./pages/Sessions.jsx";
import Community from "./pages/Community.jsx";
import Blog from "./pages/Blog.jsx";
import JoinUs from "./pages/JoinUs.jsx";

// react router import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WagmiRainbowKitProvider from "./Providers/WagmiRainbowKitProvider.jsx";

import { ToastContainer } from "react-toastify";
import AppProvider from "./Providers/AppProvider.jsx";

//css import
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <WagmiRainbowKitProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <ToastContainer autoClose={2000} hideProgressBar={true} />
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Bridge title="Scroll-Bridge" />} />
              <Route
                path="/portal"
                element={<Portal title="Scroll-Portal" />}
              />
              <Route
                path="/canvas-and-badges"
                element={<CanvasAndBadges title="Scroll-Canvas and Badges" />}
              />
              <Route
                path="/ecosystem"
                element={<Ecosystem title="Scroll-Ecosystem" />}
              />
              <Route
                path="/sessions"
                element={<Sessions title="Scroll-Sessions" />}
              />
              <Route
                path="/community"
                element={<Community title="Scroll-Community" />}
              />
              <Route path="/blog" element={<Blog title="Scroll-Blog" />} />
              <Route
                path="/join-us"
                element={<JoinUs title="Scroll-Join Us" />}
              />
            </Routes>
            <Footer />
          </Router>
        </AppProvider>
      </QueryClientProvider>
    </WagmiRainbowKitProvider>
  );
}

export default App;
