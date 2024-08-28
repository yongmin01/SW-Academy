import { BrowserRouter, Routes, Route } from 'react-router-dom'

import JoinNetworkingPage from './pages/JoinNetworking/JoinNetworkingPage'
import EnterInviteCodePage from './pages/EnterInviteCode/EnterInviteCodePage'
import EnterMyInfoPage from './pages/EnterMyInfo/EnterMyInfoPage'
import Memberlist from './pages/MemberList/MemberList'
import CreateNetworkPage from './pages/CreateNetwork/CreateNetworkPage'
import CreateFormatPage from './pages/CreateFormat/CreateFormatPage'
import DetailProfile from './pages/DetailProfile/DetailProfile'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/joinNetworking" element={<JoinNetworkingPage />} />
          <Route path="/enterInviteCode" element={<EnterInviteCodePage />} />
          <Route path="/enterMyInfo" element={<EnterMyInfoPage />} />
          <Route path="/memberlist" element={<Memberlist />} />
          <Route path="/createNetwork" element={<CreateNetworkPage />} />
          <Route path="/createFormat" element={<CreateFormatPage />} />

          <Route path="/detailProfile" element={<DetailProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
