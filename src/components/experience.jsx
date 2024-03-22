export default function EduForm() {
  return (
    <>
      <h1>Education</h1>
      <form 
        action="#"
        method="submit"
        id="exp-form"
        className="cv-form"
      >
        <ul className="form-ul" id="exp-ul">
          <li>
            <label htmlFor="company-name">Company name: </label>
            <input type="text" id="company-name" name="companyName" />
          </li>

          <li>
            <label htmlFor="job-title">Position title: </label>
            <input type="text" id="job-title" name="jobTitle" />
          </li>

          <li>
            <label htmlFor="job-description">Job description: </label>
            <textarea name="jobDesc" id="job-description" cols="30" rows="10"></textarea>
          </li>

          <li>
          <fieldset>
            <legend>From and to dates: </legend>
            <li>
              <label htmlFor="job-date-from">From: </label>
              <input type="date" id="job-date-from" name="jobDateFrom" />
            </li>
            <li>
              <label htmlFor="job-date-to">To: </label>
              <input type="date" id="job-date-to" name="jobDateTo" />
            </li>
          </fieldset>
          </li>
        </ul>
        
        <div className="btn-div">
          <button type="submit" id="submit-btn" className="form-btn">Submit</button>
          <button type="button" id="edit-btn" className="form-btn">Edit</button>
        </div>
      </form>
    </>
  )
}