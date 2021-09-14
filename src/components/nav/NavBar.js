import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import 'semantic-ui-react'
import 'semantic-ui-css'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Menu,
    Segment,
    Sidebar,
    Button,
} from 'semantic-ui-react'
import { ApplicationViews } from "../../ApplicationViews"

// const NavBarButton = () => (
//     <div>
//         <Button icon labelPosition='left'>
//             <Icon name='content' />
//             Menu
//         </Button>
//     </div>
// )

// NavBarButton()

// < Header as='h3' > Menu</Header >
//     <Icon name='content' />

const NavBar = () => {
    const [visible, setVisible] = React.useState(false)


    return (
        <Grid columns={1}>
            <Grid.Column>

                <Sidebar.Pushable as={Segment}>
                    <Grid.Column>
                        <Button
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
                        <Menu.Item as='a'>
                            <Icon name='play' />
                            <Link className="navbar__link" to="/play">Play</Link>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                            <Link className="navbar__link" to="/moods">Moods</Link>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                            <Link className="navbar__link" to="/about">About</Link>
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


// export const NavBar = (props) => {
//     return (

// }


//     {/* <ul className="navbar">
//             <li className="navbar__item active">
//                 <Link className="navbar__link" to="/play">Play</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/moods">Moods</Link>
//             </li>
//             <li className="navbar__item">
//                 <Link className="navbar__link" to="/about">About</Link>
//             </li>
//         </ul> */}


//     // <div style={{ width: props.width, paddingTop: '2em' }}>
//     {/* <ul className="navbar">
// <li className="navbar__item active">
//     <Link className="navbar__link" to="/play">Play</Link>
// </li>
// <li className="navbar__item">
//     <Link className="navbar__link" to="/moods">Moods</Link>
// </li>
// <li className="navbar__item">
//     <Link className="navbar__link" to="/about">About</Link>
// </li>
// </ul> */}
// // </div>