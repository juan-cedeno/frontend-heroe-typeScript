import React from 'react';
import './App.css';
import './i18n'
import { AuthContextProvider } from './context/AuthContext';
import { AppRouter } from './routers/AppRouter';
import ReactNotification from 'react-notifications-component'


function App() {
  
  return (
    <div>
      <AuthContextProvider>
        <ReactNotification />
        <AppRouter/>
      </AuthContextProvider>
    </div>
  );
}

export default App;
