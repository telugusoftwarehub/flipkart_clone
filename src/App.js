import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './configs/routes';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {routes.length && routes.map((item, index) => {
            return <Route path={item.path} element={<item.component />} key={index} />
          })}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
