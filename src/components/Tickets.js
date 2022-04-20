import React from 'react';
import './Tickets.css'
import Button from '@mui/material/Button';

const Tickets = () => {
  return (
    <>
      <div className='get-more-tickets'>
        <div className='title'>
          <span className='title-text'>Get More Tickets</span>
          <Button className='title-button' variant="contained">Buy</Button>
        </div>
        <div className='ticket'>ticket 1</div>
        <div className='ticket'>ticket 2</div>
        <div className='ticket'>ticket 3</div>
      </div>
    </>
  )
}

export default Tickets;