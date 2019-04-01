import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import 'foundation-sites/dist/css/foundation.min.css'

class App extends Component {
    constructor(){
      super()
      this.state ={
        firstName: "",
        lastName: "",
        entree: "",
        dairy: false,
        gluten: false,
        seafood: false,
        egg: false,
        restrictions: []
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
      const {name, value, type, checked} = e.target

      type === "checkbox" && checked === true ?
          this.setState(prevState => ({
            [name]: checked,
            restrictions: [...prevState.restrictions, " " + name]
          }))
          :
      type === "checkbox" && checked === false ?
          this.setState(prevState =>({
            [name]: checked,
            restrictions: prevState.restrictions.indexOf(" "+name) !== -1 ?
              prevState.restrictions.filter((value)=>{
                return value !== " "+name
              })
            :
            null
          }))

          :
          this.setState({[name]:value})
    }




  render() {
    let restrict = []
    return (
      <main className="App">
        <h1>Reservation</h1>
        <form>
          <input
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleChange}
          />
          <br />

          <label> Entree:</label>
          <select
            value={this.state.entree}
            onChange={this.handleChange}
            name="entree"
          >
            <option value="--Select--">--Select--</option>
            <option value="Italian">Italian</option>
            <option value="Macrobiotic">Macrobiotic</option>
            <option value="Wrap">Wrap</option>
           </select>
           <br />
           <label>
              <input
                  type="checkbox"
                  name="dairy"
                  checked={this.state.dairy}
                  onChange={this.handleChange}
               />
              Dairy
           </label>

           <label>
              <input
                  type="checkbox"
                  name="gluten"
                  checked={this.state.gluten}
                  onChange={this.handleChange}
               />
              Gluten
           </label>

           <label>
              <input
                  type="checkbox"
                  name="seafood"
                  checked={this.state.seafood}
                  onChange={this.handleChange}
               />
              Seafood
           </label>

           <label>
              <input
                  type="checkbox"
                  name="egg"
                  checked={this.state.egg}
                  onChange={this.handleChange}
               />
            Egg
           </label>
           <br />

        <button type="button" className="button">Submit</ button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Name: {this.state.firstName} {this.state.lastName}</p>
        <p>Entree: {this.state.entree}</p>
        <p>Dietary restrictions:{this.state.restrictions.toString()}</p>
      </main>
    );
  }
}

export default App;
