import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Repository from '../pages/Repository';
import NotFound from '../pages/NotFound';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NotFound />} />
      <Route path="/home" element={<Home />} />
      <Route path="/repository" element={<Repository />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;