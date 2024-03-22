export default function ExpForm () {
  return (
    <>
      <h1>Experience</h1>
      <form 
        action="#" 
        method="submit" 
        id="edu-form" 
        className="cv-form"
      >
        <ul className="form-ul" id="edu-ul">
          <li>
            <label htmlFor="school-name">School name: </label>
            <input type="text" id="school-name" name="schoolName" />
          </li>
          <li>
            <label htmlFor="edu-title">Title of Study: </label>
            <input type="text" id="edu-title" name="eduTitle" />
          </li>
          <li>
            <label htmlFor="grad-date">Graduation date: </label>
            <input type="date" id="grad-date" name="gradDate" />
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