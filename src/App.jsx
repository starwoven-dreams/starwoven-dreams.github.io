import { Route, Routes } from 'react-router';
import Home from '@/pages/Home';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/main" element={<MenuPage />} />
    </Routes>
  );
}

export default App;
