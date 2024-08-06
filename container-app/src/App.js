import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const MicroFrontend1 = lazy(() => import('./MicroFrontend1'));
const MicroFrontend2 = lazy(() => import('./MicroFrontend2'));
const MicroFrontend3 = lazy(() => import('./MicroFrontend3'));

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/micro1">Micro 1</Link></li>
            <li><Link to="/micro2">Micro 2</Link></li>
            <li><Link to="/micro3">Micro 3</Link></li>
          </ul>
        </nav>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<h1>Bienvenido a la App de Microfrontends</h1>} />
            <Route path="/micro1" element={<MicroFrontend1 />} />
            <Route path="/micro2" element={<MicroFrontend2 />} />
            <Route path="/micro3" element={<MicroFrontend3 />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;