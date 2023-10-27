import React from 'react'
import { BoxArrowInLeft, BoxArrowRight, Calendar4Week, InfoSquare } from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Items = () => {
  return (
    <div>
    <CardGroup>
        <Card>
            <Card.Body>
                <Card.Link href="/material">
                <Card.Title><BoxArrowRight size={55} />  Reserve material</Card.Title>
                </Card.Link>
                <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    
        <Card>
            <Card.Body>
                <Card.Link href="/material">
                    <Card.Title><BoxArrowInLeft size={58} />  Return material</Card.Title>
                </Card.Link>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title><Calendar4Week size={50} />  Planning</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title><InfoSquare size={50} />  Information</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This card has even longer content than the
                    first to show that equal height action.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardGroup>
</div>
  )
}

export default Items