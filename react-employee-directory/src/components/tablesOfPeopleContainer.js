import React from "react";
import '../App.css';

class tablesOfPeopleContainer extends Component {
    state = {
        searchBox: ""
    //   currentPage: "Home"
    };
  
    // handlePageChange = page => {
    //   this.setState({ currentPage: page });
    // };


  
    render() {
      return (
        <div>
          <NavTabs
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
        </div>
      );
    }
  }
  
  export default tablesOfPeopleContainer;