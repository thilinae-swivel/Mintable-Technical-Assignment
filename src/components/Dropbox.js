import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Dropbox.css';

const ticketItems = [
  {
    id: '1',
    name: 'Item 1',
  },
  {
    id: '2',
    name: 'Item 2',
  },
  {
    id: '3',
    name: 'Item 3',
  },
  {
    id: '4',
    name: 'Item 4',
  },
  {
    id: '5',
    name: 'Item 5',
  }
]

const Dropbox = () => {
  const [characters, updateCharacters] = useState(ticketItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="ticket-items">
            {(provided) => (
              <ul className="ticket-items" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <p>
                            {name}
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default Dropbox;



// import React from 'react'
// import { useDrag } from 'react-dnd'
// import { ItemTypes } from './Constants'

// /**
//  * Your Component
//  */
// export default function Card({ isDragging, text }) {
//   const [{ opacity }, dragRef] = useDrag(
//     () => ({
//       type: ItemTypes.CARD,
//       item: { text },
//       collect: (monitor) => ({
//         opacity: monitor.isDragging() ? 0.5 : 1
//       })
//     }),
//     []
//   )
//   return (
//     <div ref={dragRef} style={{ opacity }}>
//       {text}
//     </div>
//   )
// }

// import { useDrop } from 'react-dnd';

// const style = {
//   height: '12rem',
//   width: '12rem',
//   marginRight: '1.5rem',
//   marginBottom: '1.5rem',
//   color: 'white',
//   padding: '1rem',
//   textAlign: 'center',
//   fontSize: '1rem',
//   lineHeight: 'normal',
//   float: 'left',
// }

// const Dropbox = () => {
//   const [{ canDrop, isOver }, drop] = useDrop(() => ({
//     accept: 'box',
//     drop: () => ({ name: 'Dustbin' }),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//       canDrop: monitor.canDrop(),
//     }),
//   }))
//   const isActive = canDrop && isOver
//   let backgroundColor = '#222'
//   if (isActive) {
//     backgroundColor = 'darkgreen'
//   } else if (canDrop) {
//     backgroundColor = 'darkkhaki'
//   }
//   return (
//     <div ref={drop} role={'Dustbin'} style={{ ...style, backgroundColor }}>
//       {isActive ? 'Release to drop' : 'Drag a box here'}
//     </div>
//   )
// }

// export default Dropbox;