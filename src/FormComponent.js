import React from 'react'


function FormComponent(props){
  return (
    <main className="App">
      <h1>Reservation</h1>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={props.firstName}
          name="firstName"
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={props.lastName}
          name="lastName"
          onChange={props.handleChange}
        />
        <br />

        <label> Entree:</label>
        <select
          value={props.entree}
          onChange={props.handleChange}
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
                checked={props.dairy}
                onChange={props.handleChange}
             />
            Dairy
         </label>

         <label>
            <input
                type="checkbox"
                name="gluten"
                checked={props.gluten}
                onChange={props.handleChange}
             />
            Gluten
         </label>

         <label>
            <input
                type="checkbox"
                name="seafood"
                checked={props.seafood}
                onChange={props.handleChange}
             />
            Seafood
         </label>

         <label>
            <input
                type="checkbox"
                name="egg"
                checked={props.egg}
                onChange={props.handleChange}
             />
          Egg
         </label>
         <br />

      <button type="button" className="button">Submit</ button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Name: {props.firstName} {props.lastName}</p>
      <p>Entree: {props.entree}</p>
      <p>Dietary restrictions:{props.restrictions.toString()}</p>
    </main>
  );

}

export default FormComponent
