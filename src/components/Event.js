import React from 'react';
import './Event.css';
import Dropbox from './Dropbox';

const Event = () => {
  return (
    <>
      <div className='event-pane'>
        <div className='title'>Collectors Event</div>
        <div className='sub-title'>Participate and win high quality curated NFT's</div>
        <div className='drag-area'><Dropbox /></div>
        <div className='drag-area'>Dropbox</div>
        <div className='draw-area'>Draw tickets</div>
      </div>
    </>
  )
}

export default Event;