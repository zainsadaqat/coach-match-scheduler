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
import TopMenubar from './components/TopMenubar';
import CreateEventScreen from './screens/CreateEventScreen';

function App() {
  const user = false;
  return (
    <>
      {user ? (
        <section className="">
          <div className="layout-wrapper">
            <div className="layout-container">
              <aside className="sidebar">
                <Sidebar />
              </aside>
              <main className="main overflow-y-auto h-[100vh]">
                <TopMenubar />
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="login" element={<LoginScreen />} />
                  <Route path="register" element={<RegisterScreen />} />
                  <Route path="my-team" element={<MyTeamScreen />} />
                  <Route path="events" element={<EventsScreen />} />
                  <Route path="create-event" element={<CreateEventScreen />} />
                  <Route path="help" element={<HelpScreen />} />
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </section>
      ) : (
        <RegisterScreen />
      )}
    </>
  );
}

export default App;
