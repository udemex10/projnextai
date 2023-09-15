// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// Assuming you have a way to check authentication status
import { isAuthenticated } from '../auth';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login');
    } else {
      router.replace('/dashboard');
    }
  }, []);

  return null;
};

export default Home;
