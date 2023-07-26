import { useEffect } from 'react';
import { fetchGreeting } from '../feature/greetingSlice';
import { useSelector, useDispatch } from 'react-redux';

const Greeting = () => {
  const { greeting } = useSelector((store) => store.greetings);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  const handler = () => {
    dispatch(fetchGreeting());
  };

  console.log(greeting);

  return (
    <div>
      <h1>{greeting.greeting}</h1> <br />
      <button onClick={handler}>Fetch a greeting</button>
    </div>
  );
};

export default Greeting;
