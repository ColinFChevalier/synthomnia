import React, { Component } from 'react'
import { Grid, Menu, Segment, Button } from 'semantic-ui-react'

export class AboutForm extends Component {
  state = { activeItem: 'github' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='github'
              active={activeItem === 'github'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={this.handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Button.Group vertical>
    <Button>Feed</Button>
    <Button>Messages</Button>
    <Button>Events</Button>
    <Button>Photos</Button>
  </Button.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default AboutForm
