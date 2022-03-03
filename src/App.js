import React from 'react'
import Sidebar from './components/Sidebar/sidebar'
import {
  Routes,
  Route,
  MemoryRouter
} from "react-router-dom";
import TokenAssets from './Routes/TokenAssets/token_assets';
import Bridge from './Routes/Bridge/bridge';
import Transactions from './Routes/Transactions/transactions';

export default class App extends React.Component {
  render() {
    return (
      <MemoryRouter>

        <div className="App">
          <Sidebar className="sidebar" />

          <Routes className="routes">
            <Route className="route-path" path="/token-assets" element={<TokenAssets />} />
            <Route className="route-path" path="/bridge" element={<Bridge />} />
            <Route className="route-path" path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </MemoryRouter>
    )
  }
}