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
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const NavBar = () => {
    const [visible, setVisible] = React.useState(false)

    return (
        <Grid columns={1}>
            <Grid.Column>
                <Checkbox
                    checked={visible}
                    label={{ children: <code>visible</code> }}
                    onChange={(e, data) => setVisible(data.checked)}
                />
            </Grid.Column>

            <Grid.Column>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        inverted
                        onHide={() => setVisible(false)}
                        vertical
                        visible={visible}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={visible}>
                        <Segment basic>
                            <Header as='h3'>Menu</Header>
                            <Image src='/images/wireframe/paragraph.png' />
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