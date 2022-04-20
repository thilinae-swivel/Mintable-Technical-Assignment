import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './App.css';

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

function Dropbox() {
  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext>
          <Droppable droppableId="ticket-items">
            {(provided) => (
              <ul className="ticket-items" {...provided.droppableProps} ref={provided.innerRef}>
                {ticketItems.map(({ id, name }, index) => {
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