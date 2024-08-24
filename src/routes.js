import { Route, Routes } from 'react-router-dom';
import TodayRoutes from './components/TodayRoutes';
import TomorrowRoutes from './components/TomorrowRoutes';
import RoutesByDate from './components/RoutesByDate';

const AppRoutes = () => (
  <Routes>
    <Route path="/routes/:from/:to/today" element={<TodayRoutes />} />
    <Route path="/routes/:from/:to/tomorrow" element={<TomorrowRoutes />} />
    <Route path="/routes/:from/:to/:date" element={<RoutesByDate />} />
  </Routes>
);

export default AppRoutes;