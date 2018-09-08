import React, {Component} from 'react';
//functional component
// const SearchBar = () => {
//   return <input /> ;//translates to react.createElement
// }
//class component
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {term: '' };

    //this.onInputChange = this.onInputChange.bind(this);
  }

  // onInputChange(event){
  //     this.setState({term: event.target.value});
  // }

  render() {
    return (
      <div>
        <input
          //Below sets the value to the state.
          //value={this.state.term}
          //Below sets the the state to the value when component renders again
        onChange={event => this.onInputChange(event.target.value)}
         />
        Value of input: {this.state.term}
      </div>
    );
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
//event handler in searchbar is set to call this.onInputChange when an event is triggered. onInputChange sets the state and then calls the callback from app.


export default SearchBar;
//event => this.setState({term: event.target.value})
