import { useContext } from 'react';
import { Outlet } from 'react-router';

import { ThemeContext } from './context/ThemeContext';

import Header from './components/Header';
import PageLayout from './components/layout/PageLayout';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <PageLayout header={<Header tagline="Find the right resources, right away" />}>
      <Outlet />
      <div>
        The current theme is: {theme}
        <div>
          <button onClick={toggleTheme}>
            Toggle Theme
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default App;
