
import React from "react";

//getby,findby,queryby   --- rtl queries


function Application() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label>job location</label>
        <select id="job-location">
          <option value="">select country</option>
          <option value="US">USA</option>
          <option value="GB">UK</option>
          <option value="CA">Canada</option>
          <option value="IN">INDIA </option>
          <option value="AU">Australia </option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="terms" /> I agree to terms and conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Application
