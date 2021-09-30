import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

export default function MyJumbotron() {
    return <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
            This is the subtitle for my shop.
        </p>
        <p>
            <Button variant="primary">Learn more</Button>
        </p>
    </Jumbotron>
}