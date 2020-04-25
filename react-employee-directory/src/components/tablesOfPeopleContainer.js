import React, { Component } from "react";
import '../App.css';
import NavBar from "./NavBar";
import Col from "./column";
import API from "../utils/API";
import Row from "./Row";
import Card from "./card";
import Container from "./Container";


// console.log(API);
class TablesOfPeopleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      filterArray: [],
      reverse: false
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(this.state);

    this.setState({filterArray: this.state.result.filter(person => person.name.first.includes(event.target.value) || person.name.last.includes(event.target.value) || person.email.includes(event.target.value))});


    //  this.setState({result: this.state.result.filter(name=>name.includes(event.target.value))})
    
    // this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('An essay was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  headings = [
    {name: "image", width: "10%"},
    {name: "name", width: "10%"},
    {name: "phone", width: "20%"},
    {name: "email", width: "20%"},
    {name: "DOB", width: "10%"},
  ];

  
  // state = {
	// 	results: [],
	// 	search: "",
	// };
  
    // handlePageChange = page => {
    //   this.setState({ currentPage: page });
    // };

    componentDidMount() {
      // this.searchEmployees();
      API.getUsers()
      .then(res => {
        this.setState({result: res.data.results, filterArray: res.data.results});
      }).then(()=> console.log("this.state", this.state))
    }

    sortAlphabetically = (reverse) => {
      console.log("reverse!", reverse);
    // console.log('clicked')
        this.setState({filterArray : this.state.filterArray.sort((a, b) => {
          if (a.name.last < b.name.last ) {
            return reverse ? 1 : -1;
          }
          if (a.name.last > b.name.last ) {
            return reverse ? -1 : 1 ;
          }
          // a must be equal to b
          return 0;
        }), 
        reverse: !reverse 
      })
    }

    render() {
      return(
        <>
        <NavBar 
          handleChange = {this.handleChange}
          sortAlphabetically={() => this.sortAlphabetically(this.state.reverse)}
        />
        <Row 
          headings = {this.headings}
          users = {this.state.filterArray}
        />
        </>
      )
    }

      // res is the data coming back from the axios call;
      // .then((res) => this.setState({ results: res.data.results }))
      // .catch((err) => console.log(err));
  
    // searchEmployees = () => {
    //   // API.search()
    //   //   // res is the data coming back from the axios call;
    //   //   .then((res) => this.setState({ results: res.data.results }))
    //   //   .catch((err) => console.log(err));
    // };
  

    // handleSort = () => {
    //   console.log('testing handleSort function');
    // };
  
    // handleInputChange = (event) => {
    //   // Getting the value and name of the input which triggered the change
    //   const value = event.target.value;
    //   const name = event.target.name;
  
    //   // update the state of the password to the rendered change
    //   // const pass = event.target.password;
  
    //   // Updating the input's state
    //   this.setState({
    //     [name]: value,
    //   });
    // };
  
    // handleFormSubmit = (event) => {
    //   // Preventing the default behavior of the form submit (which is to refresh the page)
    //   event.preventDefault();
    //   this.searchEmployees(this.state.search);
    // };



    // render() {
    //   //
    //   if (this.state.results.length === 0) return <p>Loading...</p>;
  
    //   return (
    //     <Container>
    //       <Card className="justify-content-center">
    //         <Row heading="Your Awesome Company!!!">
    //           <Col size="md-3">
    //             <button
    //               className="btn btn-light btn-sm"
    //               onClick={this.handleSort}
    //               disabled
    //             >
    //               HEAD-SHOT
    //             </button>
    //           </Col>
    //           <Col size="md-3" className="btn btn-light btn-sm">
    //             <button
    //               className="btn btn-light btn-sm"
    //               onClick={this.handleSort}
    //             >
    //               NAME
    //             </button>
    //           </Col>
    //           <Col size="md-3">
    //             <button
    //               className="btn btn-light btn-sm"
    //               onClick={this.handleSort}
    //               disabled
    //             >
    //               CELL
    //             </button>
    //           </Col>
    //           <Col size="md-3">
    //             <button
    //               className="btn btn-light btn-sm"
    //               onClick={this.handleSort}
    //               disabled
    //             >
    //               EMAIL
    //             </button>
    //           </Col>
    //         </Row>
    //       </Card>
    //       {this.state.results.map((employee) => {
    //         console.log(employee);
    //         return (
    //           // outermost component in a loop needs a key value PROP.
    //           <Card key={employee.id.value}>
    //             <Row>
    //               <Col size="md-3">
    //                 <img src={employee.picture.medium} />
    //               </Col>
    //               <Col size="md-3">
    //                 {employee.name.first} {employee.name.last}
    //               </Col>
    //               <Col size="md-3">{employee.cell}</Col>
    //               <Col size="md-3">{employee.email}</Col>
    //             </Row>
    //           </Card>
    //         );
    //       })}
    //     </Container>
    //   );
    // }
  }
  
  export default TablesOfPeopleContainer;