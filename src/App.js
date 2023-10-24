import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav';
import { routes } from './configs/routes';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          {routes.length && routes.map((item, index) => {
            return <Route path={item.path} element={<item.component />} key={index} />
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
