import React from 'react';
import Navbar from '../../ui/components/Navbar.jsx';
import Logo from '../../ui/components/Logo.jsx';

export const WelcomeLayout = ({content}) => (
  <div className="app-root background">
    <br />
    <Logo />
    <br />
    <div className="container">
      {content}
    </div>
  </div>
);
