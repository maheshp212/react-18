import { useSelector } from "react-redux";
import "./Intro.css";
import Button from 'react-bootstrap/Button';
function Intro(){
    const counter = useSelector((state) => (!!state?.counter ? state?.counter : 0));

    return( <div>  Intro component == {counter   } 
    
    <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    
    </div>)
}

export default Intro;