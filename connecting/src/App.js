import { BrowserRouter, Routes, Route } from "react-router-dom";

import JoinNetworkingPage from "./pages/JoinNetworking/JoinNetworkingPage";
import EnterInviteCodePage from "./pages/EnterInviteCode/EnterInviteCodePage";
import EnterMyInfoPage from "./pages/EnterMyInfo/EnterMyInfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/joinNetworking" element={<JoinNetworkingPage />} />
          <Route path="/enterInviteCode" element={<EnterInviteCodePage />} />
          <Route path="/enterMyInfo" element={<EnterMyInfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
