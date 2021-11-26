import { Component } from 'react';
import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NotFound () {

  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);

  const tick = () => {
    setSeconds(seconds - 1);
  }

  useEffect(() => {
    let timer = setInterval(tick, 1000);
    return () => {if(seconds === 0){clearInterval(timer) ; navigate("/home")}};
  }, [seconds])

  return(
      <>
        <div>{seconds}</div>
        <h2>404 nada por aqui</h2>
      </>
  )
}

export default NotFound;