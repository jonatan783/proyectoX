import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const NotFoundComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  }, []);

  return <h1>Page Not Found</h1>;
};

export default NotFoundComponent;
