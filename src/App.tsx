import React from 'react';
import './App.css';
import './i18n'
import { AuthContextProvider } from './context/AuthContext';
import { AppRouter } from './routers/AppRouter';
import ReactNotification from 'react-notifications-component'
import { HeroeProvider } from './context/HeroeContext';


function App() {
  
  return (
    <div>
      <AuthContextProvider>
        <HeroeProvider>

        <ReactNotification />
        <AppRouter/>
        </HeroeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
