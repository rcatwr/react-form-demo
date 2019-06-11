import React from 'react'
import { Button } from 'react-bulma-components/full'

function FormComponent(props){
  return (
    <div className="columns is-centered">
      <div className="column is-narrow">
    <main className="App box has-background-grey-light">
      <h1 className="title is-size-3 has-text-white">Your Reservation</h1>
      <form>
        <div className="field">
          <label className="label">First Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter"
              value={props.firstName}
              name="firstName"
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Last Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter"
              value={props.lastName}
              name="lastName"
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="label"> Entree:</label>
            <div className="select">
            <select
              value={props.entree}
              onChange={props.handleChange}
              name="entree">
              <option value="--Select--">--Select--</option>
              <option value="Italian">Italian</option>
              <option value="Macrobiotic">Macrobiotic</option>
              <option value="Wrap">Wrap</option>
             </select>
            </div>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input
                  type="checkbox"
                  name="dairy"
                  checked={props.dairy}
                  onChange={props.handleChange}
               />
            &nbsp;Dairy
         </label>
       </div>
     <div class="control">
       <label class="checkbox">
            <input
                type="checkbox"
                name="gluten"
                checked={props.gluten}
                onChange={props.handleChange}
             />
            &nbsp;Gluten
         </label>
       </div>
       <div class="control">
         <label class="checkbox">
            <input
                type="checkbox"
                name="seafood"
                checked={props.seafood}
                onChange={props.handleChange}
             />
             &nbsp;Seafood
         </label>
       </div>
       <div class="control">
         <label class="checkbox">
            <input
                type="checkbox"
                name="egg"
                checked={props.egg}
                onChange={props.handleChange}
             />
           &nbsp;Egg
         </label>
       </div>
      </div>
      <div className="has-text-centered">

      </div>
      </form>
      <br/>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Your Information:
          </p>
        </header>
        <div className="card-content">
   <div class="content">
   <p className="has-text-info"><strong>Name:</strong> {props.firstName} {props.lastName}</p>
   <p className="has-text-info"><strong>Entree:</strong> {props.entree}</p>
   <p className="has-text-info"><strong>Dietary restrictions:</strong>{props.restrictions.toString()}</p>
   </div>
 </div>
 <footer class="card-footer">
   <a href="#" class="card-footer-item">Delete</a>
 </footer>
</div>





    </main>
  </div></div>
  );

}

export default FormComponent
