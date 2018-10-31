import React, { Component } from 'react'

class Quiz extends Component {

  render(){
    return(
      <form>

        <h1>Houston Helper Questionnaire</h1>

        <fieldset>
          <legend>What gender do you identify as?</legend><br/>
          <input type="radio" id="Female" value="Female" name="Female"/><label htmlFor="Female" className="light">Female</label>
          <input type="radio" id="Male" value="Male" name="Male"/><label htmlFor="Male" className="light">Male</label>
          <input type="radio" id="Non-Binary" value="Non-Binary" name="Non-Binary"/><label htmlFor="Non-Binary" className="light">Non-Binary</label>
          <input type="radio" id="Genderfluid/Genderqueer" value="Genderfluid/Genderqueer" name="Genderfluid/Genderqueer"/><label htmlFor="Genderfluid/Genderqueer" className="light">Genderfluid/Genderqueer</label>
          <input type="radio" id="Trans Woman" value="Trans Woman" name="Trans Woman"/><label htmlFor="Trans Woman" className="light">Trans Woman</label>
          <input type="radio" id="Trans Man" value="Trans Man" name="Trans Man"/><label htmlFor="Trans Man" className="light">Trans Man</label>
          <input type="radio" id="Agender" value="Agender" name="Agender"/><label htmlFor="Agender" className="light">Agender</label><br/>
        </fieldset>
        <fieldset>
          <legend>How old are you?</legend><br/>
          <input type="radio" id="under_12" value="under_12" name="user_age"/><label htmlFor="under_12" className="light">Under 12</label>
          <input type="radio" id="13-20" value="13-20" name="user_age"/><label htmlFor="13-20" className="light">13 - 20</label>
          <input type="radio" id="21-35" value="21-35" name="user_age"/><label htmlFor="21-35" className="light">21 - 35</label>
          <input type="radio" id="36-64" value="36-64" name="user_age"/><label htmlFor="36-64" className="light">36 - 64</label>
          <input type="radio" id="65+" value="65+" name="user_age"/><label htmlFor="65+" className="light">65+</label><br/>
        </fieldset>
        <fieldset>
          <legend>Do you identify as LGBTQIA?</legend><br/>
          <input type="radio" id="YesLGBT" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoLGBT" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Are you a U.S. Veteran?</legend><br/>
          <input type="radio" id="YesVet" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoVet" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Are you homeless?</legend><br/>
          <input type="radio" id="YesHomeless" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoHomeless" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend htmlFor="income">What is the total income for your household?</legend><br/>
          <select id="income" name="income">
            <optgroup>
              <option value="Under $24,999">Under $24,999</option>
              <option value="$25,000 - $49,999">$25,000 - $49,999</option>
              <option value="$50,000 - $99,999">$50,000 - $99,999</option>
              <option value="$100,000 - $249,999">$100,000 - $249,999</option>
              <option value="$250,000 - $499,999">$250,000 - $499,999</option>
              <option value="$500,000+">$500,000+</option>
            </optgroup>
          </select><br/>
        </fieldset>
        <fieldset>
          <legend>Do you need assistance paying for your rent or utilities?</legend><br/>
          <input type="radio" id="YesRent" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoRent" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Do you need assistance getting food for you and/or your family?</legend><br/>
          <input type="radio" id="YesFood" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoFood" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Do you need free legal aid?</legend><br/>
          <input type="radio" id="YesLaw" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoLaw" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Were you recently released from jail or prison?</legend><br/>
          <input type="radio" id="YesJail" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoJail" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Do you need help overcoming or recovering from drug/alcohol abuse?</legend><br/>
          <input type="radio" id="YesDrug" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoDrug" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <legend>Do you need help finding affordable mental health and/or general heathcare services?</legend><br/>
          <input type="radio" id="YesHealth" value="Yes" name="Yes"/><label htmlFor="Yes" className="light">Yes</label>
          <input type="radio" id="NoHealth" value="No" name="No"/><label htmlFor="No" className="light">No</label><br/>
        </fieldset>

        <button type="submit">Finished</button>
      </form>
    )
  }

}

export default Quiz;
