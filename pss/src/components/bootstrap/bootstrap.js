
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import ListGroup from 'react-bootstrap/ListGroup';

import Pagination from 'react-bootstrap/Pagination';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Bootstrap = () =>{

    // let active = 2;
    const [activePage, setActivePage] = useState(2)

let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item 
        key={number}
        active={number === activePage}
        onClick={()=>pageItemHandler(number)}
        >
      {number}
    </Pagination.Item>,
  );
}

const pageItemHandler = ( number) =>{
    setActivePage(number);

}



const [showA, setShowA] = useState(true);
const [position, setPosition] = useState('bottom-end');

const toggleShowA = () => setShowA(!showA);
    return <div>
          <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>


      <ListGroup>
      <ListGroup.Item><Button variant="primary">Primary</Button></ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>



    <Pagination>{items}</Pagination>





    <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button>
        <ToastContainer
          className="p-3"
          position={position}
          style={{ zIndex: 1 }}
        >
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </ToastContainer>
    </div>
}
export default Bootstrap;