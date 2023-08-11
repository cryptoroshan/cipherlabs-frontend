import { Route, Routes } from "react-router-dom";

import LandingLayout from "./layouts/LandingLayout";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
