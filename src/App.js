import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <Jumbotron fluid className="jumbotron">
            <Container>
              <h1>Ashley Scott</h1>
              <p>A Twin Cities based Software Engineer ready to make an immediate contribution to your organization.</p>
              <Button className="button" variant="light" href="https://www.linkedin.com/in/ashley-scott-670853b6/">LinkedIn</Button>
              <Button className="button" variant="light" href="https://github.com/aescott87">GitHub</Button>
            </Container>
          </Jumbotron>
          <h2>Prime Digital Academy</h2>
          <p>Through Prime Digital Academy I have been able to learn a multitude of valuable technological languages and frameworks including (but not limited to) React, Redux, and Node.js.
          Here are some of the great ways I have been able to employ this new knowledge.</p>
          <CardDeck className="project-groupings">
            <Card>
              <Card.Img variant="top" src="./images/to-do-app.png" />
              <Card.Body className="project-info">
                <Card.Title>For You To Do</Card.Title>
                <Card.Text>
                  Using jQuery, this web-based application lets you create a list of tasks and uses color coding to guide you on what is done, and what you have left. Styled with Bootstrap.
      </Card.Text>
                <Card.Link href="https://dry-coast-92059.herokuapp.com/">Check It Out</Card.Link>
                <Card.Link href="https://github.com/aescott87/To-Do-For-You">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="./images/movie-collection.png" />
              <Card.Body className="project-info">
                <Card.Title>Movie Collection</Card.Title>
                <Card.Text>
                  Using React and Redux, this application displays a collection of films and allows the user to edit a film's title and description. Styled with Material UI.
                </Card.Text>
                <Card.Link href="https://murmuring-temple-92700.herokuapp.com/#/">Check It Out</Card.Link>
                <Card.Link href="https://github.com/aescott87/Movie-Database">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="./images/ashleygram.png" />
              <Card.Body className="project-info">
                <Card.Title>AshleyGram</Card.Title>
                <Card.Text>
                  Using React, this app is a personal photo gallery in which users can click on images to see more details, and can "like" their favorite images. Styled using CSS.
      </Card.Text>
                <Card.Link href="https://secret-temple-36448.herokuapp.com/">Check It Out</Card.Link>
                <Card.Link href="https://github.com/aescott87/AshleyGram">GitHub Repo</Card.Link>
              </Card.Body>
            </Card>
          </CardDeck>
          <h2>Solo Project: ThreadBare</h2>
          <p>My solo project for Prime Digital Academy is a web-based application called ThreadBare.
          ThreadBare is for shoppers whose clothing sizes fall outside of "standard sizing" and can sometimes have difficulty finding their size.
          With this app, users can search for retailers that carry their size, and can even contribute retailers they know of to the database.
          This app was created using React, Redux, and PostgreSQL, among others. ThreadBare was styled with MUI CSS.
          </p>
          <Button className="button" variant="light" href="https://fierce-crag-17582.herokuapp.com/#/home">Visit ThreadBare</Button>
          <Button className="button" variant="light" href="https://github.com/aescott87/ThreadBare">ThreadBare GitHub Repo</Button>
          <CardDeck className="project-groupings">
            <Card>
              <Card.Img variant="top" src="./images/search.png" />
              <Card.Body className="project-info">
                <Card.Title>Search</Card.Title>
                <Card.Text>
                  Users can search by retailer name, or by one or more sizes.
      </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="./images/search-results.png" />
              <Card.Body className="project-info">
                <Card.Title>Search Results</Card.Title>
                <Card.Text>
                  Search results include the retailer name, website with link, sizes the retailer carries, and where the user can shop the retailer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="./images/add-a-retailer.png" />
              <Card.Body className="project-info">
                <Card.Title>Add a Retailer</Card.Title>
                <Card.Text>
                  The user can add a retailer that is not currently listed but offers one or more of the types of sizing available to search. User must add a retailer name, website, sizes carried, and where the retailer can be shopped.
      </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
          <h2>In Progress: Client Project</h2>
          <p>As part of my final project with Prime Digital Academy, I will be collaborating with members of my cohort to help a local organization.
            I am looking forward to applying my new skillset and working with my peers!</p>
        </>
      </div>
    );
  }
}

export default App;
