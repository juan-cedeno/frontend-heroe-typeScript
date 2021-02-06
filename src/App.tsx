import React from 'react';
import './App.css';
import './i18n'
import { AppRouter } from './routers/AppRouter';
import ReactNotification from 'react-notifications-component'
import { HeroeProvider } from './context/HeroeContext';
import { AuthProvider } from './context/AuthContext';


function App() {
  
  return (
    <div>
        <HeroeProvider>
        <AuthProvider>
          
          <ReactNotification />
          <AppRouter/>

        </AuthProvider>
        </HeroeProvider>

    </div>
  );
}

export default App;
