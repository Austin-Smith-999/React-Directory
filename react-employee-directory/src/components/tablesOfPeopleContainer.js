import React, { Component } from "react";
import '../App.css';
import NavBar from "./NavBar";
import Col from "./column";
import API from "../utils/API";
import Row from "./Row";
import Card from "./card";
import Container from "./Container";

class tablesOfPeopleContainer extends Component {
    state = {
		search: "",
		results: [],
    };
  
    // handlePageChange = page => {
    //   this.setState({ currentPage: page });
    // };

    componentDidMount() {
      this.searchEmployees();
    }
  
    searchEmployees = () => {
      API.search()
        // res is the data coming back from the axios call;
        .then((res) => this.setState({ results: res.data.results }))
        .catch((err) => console.log(err));
    };
  

    render() {
      //
      if (this.state.results.length === 0) return <p>Loading...</p>;
  
      return (
        <Container>
          <Card className="justify-content-center">
            <Row heading="Your Awesome Company!!!">
              <Col size="md-3">
                <button
                  className="btn btn-light btn-sm"
                  onClick={this.handleSort}
                  disabled
                >
                  HEAD-SHOT
                </button>
              </Col>
              <Col size="md-3" className="btn btn-light btn-sm">
                <button
                  className="btn btn-light btn-sm"
                  onClick={this.handleSort}
                >
                  NAME
                </button>
              </Col>
              <Col size="md-3">
                <button
                  className="btn btn-light btn-sm"
                  onClick={this.handleSort}
                  disabled
                >
                  CELL
                </button>
              </Col>
              <Col size="md-3">
                <button
                  className="btn btn-light btn-sm"
                  onClick={this.handleSort}
                  disabled
                >
                  EMAIL
                </button>
              </Col>
            </Row>
          </Card>
          {this.state.results.map((employee) => {
            console.log(employee);
            return (
              // outermost component in a loop needs a key value PROP.
              <Card key={employee.id.value}>
                <Row>
                  <Col size="md-3">
                    <img src={employee.picture.medium} />
                  </Col>
                  <Col size="md-3">
                    {employee.name.first} {employee.name.last}
                  </Col>
                  <Col size="md-3">{employee.cell}</Col>
                  <Col size="md-3">{employee.email}</Col>
                </Row>
              </Card>
            );
          })}
        </Container>
      );
    }
  }
  
  export default tablesOfPeopleContainer;