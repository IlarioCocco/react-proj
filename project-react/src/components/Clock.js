import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    });

    return () => {clearInterval(interval);};
  });

  const formattedTime = time.toLocaleTimeString();

  return (
    <>
      <span className="spuntino">
        <FontAwesomeIcon icon="clock" className='fantawesomeCustom' />
        {/* <FontAwesomeIcon icon="square" className='fantawesomeCustom' /> */}
      </span>
      <div className="clock text-uppercase fw-bold"> 
        {formattedTime}
      </div>
    </>
  )
};

export default Clock;




