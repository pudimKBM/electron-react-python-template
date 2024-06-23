// App.js
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { get } from 'utils/requests';
import { Counter } from 'components/counter/Counter';
import Titlebar from 'components/titlebar/Titlebar';
import Sidebar from 'components/sidebar/Sidebar';
import FormPage from 'components/form/FormPage';
import logo from 'logo.svg';
import styles from 'components/App.module.scss';

function App() {
  useEffect(() => {
    /**
     * Example call to Flask
     * @see /src/utils/requests.js
     * @see /app.py
     */
    setTimeout(() => get(
      'example', // Route
      (response) => alert(response), // Response callback
      (error) => console.error(error) // Error callback
    ), 3000);
  }, []);

  return (
    <Router>
      <Fragment>
        <Titlebar />
        <Sidebar />
        <div className={styles.app}>
          <Routes>
            <Route path="/" element={
              <header className={styles['app-header']}>
                <img src={logo} className={styles['app-logo']} alt="logo" />
                <Counter />
                <p>
                  Edit
                  {' '}
                  <code>src/App.js</code>
                  {' '}
                  and save to reload.
                </p>
                <span>
                  <span>Learn </span>
                  <a
                    className={styles['app-link']}
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React
                  </a>
                  <span>, </span>
                  <a
                    className={styles['app-link']}
                    href="https://redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux
                  </a>
                  <span>, </span>
                  <a
                    className={styles['app-link']}
                    href="https://redux-toolkit.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Redux Toolkit
                  </a>
                  ,
                  <span> and </span>
                  <a
                    className={styles['app-link']}
                    href="https://react-redux.js.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React Redux
                  </a>
                </span>
              </header>
            } />
            <Route path="/form" element={<FormPage />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
