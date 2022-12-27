import { useEffect, useState } from 'react';

const Test = () => {
  const [test, setTest] = useState();

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    fetch('http://localhost:5000/notes', requestOptions)
      .then((responnse) => responnse.json())
      .then((data) => setTest(data));
  }, []);

  console.log(test);
  return <div>Test</div>;
};

export default Test;
