import React from 'react';
import './HomeScreen.css';
import Sidebar from '../components/Sidebar';

const HomeScreen = () => {
  return (
    <section className="">
      <div className="layout-wrapper">
        <div className="layout-container">
          <aside className="sidebar">
            <Sidebar />
          </aside>
          <main className="main">main body</main>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
