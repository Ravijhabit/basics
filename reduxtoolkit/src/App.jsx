import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';
import css from './app.module.css';

function App() {
  const {count} = useSelector((state)=> state.counter);
  const dispatch = useDispatch();
  return (
    <div className={css.app}>
      <h1> The count is: {count}</h1>
      <div className={css.btn}>
        <button className={css.sbtn} onClick= {() => dispatch(increment())}>increment</button>
        <button className={css.sbtn} onClick= {() => dispatch(decrement())}>decrement</button>
        <button className={css.sbtn} onClick= {() => dispatch(incrementByAmount(5))}>increment by 5</button>
      </div>
    </div>
  );
}

export default App
