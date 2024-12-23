import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';
import { TabItem } from './components/TabItem';
import { GlobalContextProvider } from './store/GlobalContextProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalContextProvider>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="tabs" element={<TabsPage />}>
            {/* <Route index element={<TabsPage />} /> */}
            <Route path=":tabId?" element={<TabItem />} />
          </Route>

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Route>
      </Routes>
    </HashRouter>
  </GlobalContextProvider>,
);
