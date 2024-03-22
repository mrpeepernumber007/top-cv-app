export default function GeneralForm() {

  function handleSubmit() {
    return true
  }
 return (
  <div className="general-form-div">
    <h1>General Information</h1>
    <form 
      action="#" 
      method="submit" 
      id="general-form" 
      className="cv-form" 
      onSubmit={handleSubmit}
    >
      <ul className="form-ul" id="general-ul">
        <li>
          <label htmlFor="f-name">First name: </label>
          <input type="text" name="firstName" className="cv-short-input" id="f-name"/>
        </li>

        <li>
          <label htmlFor="l-name">Last name: </label>
          <input type="text" name="lastName" className="cv-short-input" id="l-name"/>
        </li>

        <li>
          <label htmlFor="e-mail">Email: </label>
          <input type="text" name="mail" className="cv-short-input" id="e-mail"/>
        </li>
        
        <li>
          <label htmlFor="phone-num">Phone number: </label>
          <input type="text" name="phoneNumber" className="cv-short-input" id="phone-num"/>
        </li>
      </ul>
      
      <div className="btn-div">
        <button type="submit" id="submit-btn" className="form-btn">Submit</button>
        <button type="button" id="edit-btn" className="form-btn">Edit</button>
      </div>
    </form>
  </div>
 )
}