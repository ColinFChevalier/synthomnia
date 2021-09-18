import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import 'semantic-ui-react'
import 'semantic-ui-css'
import {
    Grid,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Button,
} from 'semantic-ui-react'
import { ApplicationViews } from "../../ApplicationViews"

const NavBar = () => {
    const [visible, setVisible] = React.useState(false)


    return (
        <Grid columns={1}>
            <Grid.Column>

                <Sidebar.Pushable as={Segment}>
                    <Grid.Column>
                        <Button className="sidebar_toggle"
                            onClick={(e, data) => setVisible(!visible)}
                        >
                            <Icon name='content' />
                        </Button>
                    </Grid.Column>
                    <Sidebar
                        as={Menu}
                        animation='push'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                        height='100vh'
                    >
                    <Grid.Column>
                        </Grid.Column>
                        <Menu.Item as='a'>
                            <Button size="huge" className="sidebar_menu_option">
                                <Icon name='play' />
                                <Link className="navbar__link" to="/home">Home</Link>
                            </Button>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Button size="huge" className="sidebar_menu_option">
                                <Icon name='gamepad' />
                                <Link className="navbar__link" to="/moods">Mood</Link>
                            </Button>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Button size="huge" className="sidebar_menu_option">
                                <Icon name='camera' />
                                <Link className="navbar__link" to="/about">About</Link>
                            </Button>
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        <div style={{
                            backgroundImage: "url(" + "https://images.unsplash.com/photo-1534156039819-c89418369a4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <Segment basic style={{ height: '100vh' }}>
                                <ApplicationViews />
                            </Segment>
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Grid.Column>
        </Grid>
    )
}

export default NavBar
