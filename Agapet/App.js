import React from 'react';
console.reportErrorsAsExceptions = false; // copy paste this line in your App.js 
//Ventanas
import {Navigation} from './src/components/Navigation'
import {AuthProvider} from './src/context/AuthContext'
import { NavigationProvider } from './src/components/NavigationContext';


export default function App() {
  
  return (
    <AuthProvider>
      <NavigationProvider>
        <Navigation />
      </NavigationProvider>
        
    </AuthProvider>
  );
}

