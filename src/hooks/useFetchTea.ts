import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SingleTea } from '../pages/TeaPage/types';

const useFetchTea = (id: string | undefined) => {
  const [tea, setTea] = useState<SingleTea | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const { data } = await axios.get<SingleTea>(
          'https://6608a863a2a5dd477b14ab61.mockapi.io/items/' + id,
        );
        setTea(data);
      } catch (error) {
        alert('Loading error');
        navigate('/');
      }
    };
    fetchData();
  }, [id, navigate]);
  return { tea };
};

export default useFetchTea;
