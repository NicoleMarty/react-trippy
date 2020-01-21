import React, { Component } from 'react'
import DeleteBtn from '../components/DeleteBtn'
import Jumbotron from '../components/Jumbotron'
import API from '../utils/API'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from '../components/Grid'
import { List, ListItem } from '../components/List'
import { Input, TextArea, FormBtn } from '../components/Form'

class Trips extends React.Component {
  state = {
    trips: [],
    title: '',
    author: '',
    synopsis: ''
  }

  componentDidMount () {
    this.loadTrips()
  }

  loadTrips = () => {
    API.getTrips()
      .then(res =>
        this.setState({ trips: res.data, title: '', author: '', synopsis: '' })
      )
      .catch(err => console.log(err))
  }

  deleteTrip = id => {
    API.deleteTrip(id)
      .then(res => this.loadTrips())
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if (this.state.title && this.state.author) {
      API.saveTrip({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadTrips())
        .catch(err => console.log(err))
    }
  }

  render () {
    return (
      <Container fluid>
        <Row>
          <Col size='md-6'>
            <Jumbotron>
              <h1>Wanna take a trip?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name='title'
                placeholder='Title (required)'
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name='author'
                placeholder='Author (required)'
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name='synopsis'
                placeholder='Synopsis (Optional)'
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Trip
              </FormBtn>
            </form>
          </Col>
          <Col size='md-6 sm-12'>
            <Jumbotron>
              <h1>Trips on My List</h1>
            </Jumbotron>
            {this.state.trips.length ? (
              <List>
                {this.state.trips.map(trip => (
                  <ListItem key={trip._id}>
                    <Link to={'/trips/' + trip._id}>
                      <strong>
                        {trip.title} by {trip.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteTrip(trip._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Trips
