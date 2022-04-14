import SideBarNav from "./SideBarNav";
import 'react-bootstrap-drawer/lib/style.css';
import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';

const SideBarLeft = (props) => {
    return (
        <>
        <Container fluid>
            <Row className="flex-xl-nowrap">
                <Col as={ SideBarNav } xs={ 12 } md={ 3 } lg={ 2 } />
                <Col xs={ 12 } md={ 9 } lg={ 10 }>{ props.children }</Col>
            </Row>
        </Container>
    </>
    );
};

export default SideBarLeft;