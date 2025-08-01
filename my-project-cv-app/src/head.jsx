import { useState } from "react";

function Header() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [title, setTitle] = useState("");
  const [degree, setDegree] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [textArea, setTextArea] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [formSubmission, setFormSubmission] = useState("");
  const [secondFormSubmission, setSecondFormSubmission] = useState("");
  const [thirdFormSubmission, setThirdFormSubmission] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
    console.log(event.target.value);
  }
  function handleSchoolName(event) {
    setSchoolName(event.target.value);
  }
  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleDegree(event) {
    setDegree(event.target.value);
  }
  function handleCompanyName(event) {
    setCompanyName(event.target.value);
  }
  function handlePosition(event) {
    setPosition(event.target.value);
  }
  function handleTextArea(event) {
    setTextArea(event.target.value);
  }
  function handleFromDate(event) {
    setFromDate(event.target.value);
  }
  function handleToDate(event) {
    setToDate(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const formJson = {
      name,
      email,
      phone,
    };
    setFormSubmission(formJson);
    setName("");
    setEmail("");
    setPhone("");
  }
  function handleFirstEdit(e) {
    e.preventDefault();
    setName(formSubmission.name);
    setEmail(formSubmission.email);
    setPhone(formSubmission.phone);
  }

  function handleSecondFormSubmission(e) {
    e.preventDefault();
    const secondFormJson = {
      schoolName,
      title,
      degree,
    };
    setSecondFormSubmission(secondFormJson);
    setSchoolName("");
    setTitle("");
    setDegree("");
  }
  function handleSecondEdit(e) {
    e.preventDefault();
    setSchoolName(secondFormSubmission.schoolName);
    setTitle(secondFormSubmission.title);
    setDegree(secondFormSubmission.degree);
  }
  function handleThirdFormSubmission(e) {
    e.preventDefault();
    const thirdFormJson = {
      companyName,
      position,
      textArea,
      fromDate,
      toDate,
    };
    setThirdFormSubmission(thirdFormJson);
    setCompanyName("");
    setPosition("");
    setTextArea("");
    setFromDate("");
    setToDate("");
  }
  function handleThirdEdit(e) {
    e.preventDefault();
    setCompanyName(thirdFormSubmission.companyName);
    setPosition(thirdFormSubmission.position);
    setTextArea(thirdFormSubmission.textArea);
    setFromDate(thirdFormSubmission.fromDate);
    setToDate(thirdFormSubmission.toDate);
  }
  return (
    <div className="container">
      <div className="header">
        <h1>My Cv</h1>
      </div>
      <div className="content">
        <form action="" onSubmit={handleSubmit} className="form">
          <div className="general-info">
            <div className="General">
              <h2>General Info</h2>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleName}
              />
              <p>Name : {formSubmission.name}</p>
              <input
                type="number"
                placeholder="Phone"
                value={phone}
                onChange={handlePhone}
              />
              <p>Phone: {formSubmission.phone}</p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
              <p>Email : {formSubmission.email}</p>
              <div className="buttons-div">
                <button type="submit">Add</button>
                <button onClick={handleFirstEdit}>edit</button>
              </div>
            </div>
          </div>
        </form>

        <form action="" onSubmit={handleSecondFormSubmission} className="form">
          <div className="education">
            <div className="Education">
              <h2>Education</h2>
              <input
                type="text"
                placeholder="School Name"
                value={schoolName}
                onChange={handleSchoolName}
              />
              <p>School Name : {secondFormSubmission.schoolName}</p>
              <input
                type="text"
                placeholder="Title of study"
                value={title}
                onChange={handleTitle}
              />
              <p>Title of study : {secondFormSubmission.title}</p>
              <input
                type="text"
                placeholder="Degree"
                value={degree}
                onChange={handleDegree}
              />
              <p>Degree : {secondFormSubmission.degree}</p>
              <div className="buttons-div">
                <button type="submit">Add</button>
                <button onClick={handleSecondEdit}>edit</button>
              </div>
            </div>
          </div>
        </form>
        <form action="" onSubmit={handleThirdFormSubmission} className="form">
          <div className="experience">
            <div className="Experience">
              <h2>Experience</h2>
              <input
                type="text"
                placeholder="Company Name"
                value={companyName}
                onChange={handleCompanyName}
              />
              <p>Company Name : {thirdFormSubmission.companyName}</p>
              <input
                type="text"
                placeholder="Position Title"
                value={position}
                onChange={handlePosition}
              />
              <p>Position : {thirdFormSubmission.position}</p>
              <textarea
                placeholder="Main Responsibilities"
                value={textArea}
                onChange={handleTextArea}
              ></textarea>
              <p>Responsibilities : {thirdFormSubmission.textArea}</p>
              <input
                type="date"
                placeholder="From:"
                value={fromDate}
                onChange={handleFromDate}
              />
              <p>From : {thirdFormSubmission.fromDate}</p>
              <input
                type="date"
                placeholder="To:"
                value={toDate}
                onChange={handleToDate}
              />
              <p>To : {thirdFormSubmission.toDate}</p>

              <div className="buttons-div">
                <button type="submit">Add</button>
                <button onClick={handleThirdEdit}>edit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="footer">
        <h1>this is the footer</h1>
      </div>
    </div>
  );
}
export default Header;
