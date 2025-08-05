import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Order from './pages/Order';
import DashboardLayout from './Layouts/DashboardLayout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Parts from './pages/Parts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Redirect "/" to "/order" */}
          <Route index element={<Navigate to="/order" replace />} />
          
          {/* Order page */}
          <Route path="order" element={<Order />} />
          <Route path="parts" element={<Parts />} />

          {/* Redirect any unknown paths to "/order" */}
          <Route path="*" element={<Navigate to="/order" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
