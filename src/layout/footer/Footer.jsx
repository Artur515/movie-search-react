import React from 'react'
import {Divider, Image, Segment, Container} from 'semantic-ui-react'
import logo from '../../image/logo.png'

const Footer = () => {

    return (
        <Segment inverted vertical style={{margin: '5em 0em 0em', padding: '5em 0em'}}>
            <Container textAlign='center'>
                <Divider inverted section/>
                <Image centered size='mini' src={logo}/>
                <div>©{new Date().getFullYear()} Copyright Text</div>
                <a href="#!" target='_blank'>Repositories</a>
            </Container>
        </Segment>
    )
}

export default Footer