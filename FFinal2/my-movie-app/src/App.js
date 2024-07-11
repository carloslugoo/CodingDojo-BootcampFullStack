import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MovieList from './views/MovieList';
import NewMovie from './views/NewMovie';
import MovieReview from './views/MovieReview';
import AddReview from './views/AddReview';
function App() {
  return (
    <Router>
    <div className="app-container">
        <Routes>
            <Route path="/" exact element={<MovieList/>} />
            <Route path="/add" element={<NewMovie/>} />
            <Route path="/:id" element={<MovieReview/>} />
            <Route path="/:id/review" element={<AddReview/>} />
        </Routes>
        </div>
    </Router>
);
}

export default App;
