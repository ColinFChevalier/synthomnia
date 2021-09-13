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
                            Play
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                            Moods
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                            About
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        <Segment basic style={{ height: '100vh' }}>
                            <ApplicationViews />
                        </Segment>
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