import logo from './logo.svg';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import TopNav from './components/topNav'

function App() {
  return (
    <div>
      <div className="stickyNav">
        <div className='container'>
          <TopNav />
        </div>
      </div>
    </div>
  );
}

export default App;
