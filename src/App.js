import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";

let button = {
  backgroundColor: 'black',
  padding:'10px 20px',
  color:'white',
  border:'red',

}

class App extends Component {
  render() {
    const { fetching, dog, onRequestFetch, error} = this.props;

    return (
      <div className="App">
        <p>Page rendered</p>
        <img src={ dog || "https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg?quality=90&strip=all&w=618&h=410&crop=1"}
          alt="dog image" style={{ width:'500px', height:'500px', objectFit:'cover'}}/>

        {dog ? (
            <p>Keep clicking for new dogs</p>
        ) : (
            <p>Replace the React icon with a dog!</p>
        )}

        {fetching ? (
            <button disabled style={button}>Fetching...</button>
        ) : (
            <button onClick={onRequestFetch} style={button}>Request a Dog</button>
        )}
        {error ? (
            <p style={{ color:'red'}}>there is some error</p>):
            <p style={{ color:'green'}}>image rendering successfully</p>
        }

      </div>




  );
  }
}

const mapStateToProps = state => {
  return{
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onRequestFetch: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};
// const mapDispatchToProps = dispatch => {
//   return{
//     onRequestFetch: () => dispatch({
//       type: 'API_CALL_REQUEST'
//     })
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
