import './App.css';
import Header from './Header';
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import TopBar from './TopBar';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="app__page">
        <Sidebar />
        <div className="app__recommendations">
          <TopBar />
          <RecommendedVideos />
        </div>
      </div>
    </div>
  );
}

export default App;
