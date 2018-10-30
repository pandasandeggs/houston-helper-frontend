import React, { Component } from 'react'

class Quiz extends Component {

  state = {
    categories: []
  }

  render(){
    return(
      <form>

        <h1>Houston Helper Questionnaire</h1>

        <fieldset>
          <label>What gender do you identify as?</label><br/>
          <input type="radio" id="Female" value="Female" name="Female"/><label for="Female" className="light">Female</label>
          <input type="radio" id="Male" value="Male" name="Male"/><label for="Male" className="light">Male</label>
          <input type="radio" id="Non-Binary" value="Non-Binary" name="Non-Binary"/><label for="Non-Binary" className="light">Non-Binary</label>
          <input type="radio" id="Genderfluid/Genderqueer" value="Genderfluid/Genderqueer" name="Genderfluid/Genderqueer"/><label for="Genderfluid/Genderqueer" className="light">Genderfluid/Genderqueer</label>
          <input type="radio" id="Trans Woman" value="Trans Woman" name="Trans Woman"/><label for="Trans Woman" className="light">Trans Woman</label>
          <input type="radio" id="Trans Man" value="Trans Man" name="Trans Man"/><label for="Trans Man" className="light">Trans Man</label>
          <input type="radio" id="Agender" value="Agender" name="Agender"/><label for="Agender" className="light">Agender</label><br/>
        </fieldset>
        <fieldset>
          <label>How old are you?</label><br/>
          <input type="radio" id="under_12" value="under_12" name="user_age"/><label for="under_12" className="light">Under 12</label>
          <input type="radio" id="13-20" value="over_13" name="user_age"/><label for="over_13" className="light">13 - 20</label>
          <input type="radio" id="over_13" value="over_13" name="user_age"/><label for="over_13" className="light">21 - 35</label>
          <input type="radio" id="over_13" value="over_13" name="user_age"/><label for="over_13" className="light">36 - 64</label>
          <input type="radio" id="over_13" value="over_13" name="user_age"/><label for="over_13" className="light">65+</label><br/>
        </fieldset>
        <fieldset>
          <label>Do you identify as LGBTQIA?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Are you a U.S. Veteran?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Are you homeless?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label for="income">What is the total income for your household?</label><br/>
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
          <label>Do you need assistance paying for your rent or utilities?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Do you need assistance getting food for you and/or your family?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Do you need free legal aid?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Were you recently released from jail or prison?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Do you need help overcoming or recovering from drug/alcohol abuse?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>
        <fieldset>
          <label>Do you need help finding affordable mental health and/or general heathcare services?</label><br/>
          <input type="radio" id="Yes" value="Yes" name="Yes"/><label for="Yes" className="light">Yes</label>
          <input type="radio" id="No" value="No" name="No"/><label for="No" className="light">No</label><br/>
        </fieldset>

        <button type="submit">Finished</button>
      </form>
    )
  }

}

export default Quiz;
