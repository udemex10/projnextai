import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    //router.replace('./Dashboard');
    router.replace('./ProjectspaceDashboard');
  }, []);

  return null;
};

export default Home;
