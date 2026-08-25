import React from 'react';
import AuthForm from '../components/AuthForm';
import LeftHero from '../components/LeftLogin';


const LoginLanding = () => {
  return (
    <div className="flex min-h-screen w-full font-sans antialiased">
      <LeftHero />
      <AuthForm />
    </div>
  );
};

export default LoginLanding;