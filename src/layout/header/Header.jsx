import React from 'react'
import {Container, Image, Menu} from 'semantic-ui-react'
import logo from '../../image/logo.png'

const Header = () => {

    return (
        <Menu inverted size='huge'>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='medium' src={logo} style={{marginRight: '1.5em', width: '50px'}}/>
                    Films
                </Menu.Item>
                <Menu.Item position='right'>
                </Menu.Item>
                <Menu.Item as='a'>Repo</Menu.Item>
            </Container>
        </Menu>

    )
}


export default Header