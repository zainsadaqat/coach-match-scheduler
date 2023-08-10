import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EventsScreen from './screens/EventsScreen';
import PageNotFound from './screens/PageNotFoundScreen';
import MyTeamScreen from './screens/MyTeamScreen';
import Sidebar from './components/Sidebar';
import HelpScreen from './screens/HelpScreen';

function App() {
  return (
    <>
      <section className="">
        <div className="layout-wrapper">
          <div className="layout-container">
            <aside className="sidebar">
              <Sidebar />
            </aside>
            <main className="main">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="login" element={<LoginScreen />} />
                <Route path="register" element={<RegisterScreen />} />
                <Route path="my-team" element={<MyTeamScreen />} />
                <Route path="events" element={<EventsScreen />} />
                <Route path="help" element={<HelpScreen />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
