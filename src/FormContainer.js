import React, { Component } from 'react';
import FormComponent from "./FormComponent"
class FormContainer extends Component {
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
      let displayName = " " + name
      type === "checkbox" && checked === true ?
          this.setState(prevState => ({
            [name]: checked,
            restrictions: [...prevState.restrictions, displayName]
          }))
          :
      type === "checkbox" && checked === false ?
          this.setState(prevState =>({
            [name]: checked,
            restrictions: prevState.restrictions.indexOf(displayName) !== -1 ?
              prevState.restrictions.filter((value)=>{
                return value !== displayName
              })
            :
            null
          }))

          :
          this.setState({[name]:value})
    }




  render() {
    return(
    <FormComponent
        handleChange={this.handleChange}
        //grab all the properties of the object
        {...this.state}
     />
   )
  }
}

export default FormContainer;
