import { use, useState } from "react"

function Header() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [schoolName,setSchoolName] = useState('')
    const [title,setTitle] = useState('')
    const [degree,setDegree] = useState('')
    const [companyName,setCompanyName] = useState('')
    const [position,setPosition] = useState('')
    const [textArea,setTextArea] = useState('')
    const [fromDate,setFromDate] = useState('')
    const [toDate,setToDate] = useState('')


    const handleName = (event) => {
      setName(event.target.value)
        console.log(event.target.value)
    }
    function handleEmail(event) {
        setEmail(event.target.value)
        console.log(event.target.value)
    }
    function handlePhone(event) {
        setPhone(event.target.value)
        console.log(event.target.value)
    }
    function handleSchoolName(event) {
        setSchoolName(event.target.value)
    }
    function handleTitle(event) {
        setTitle(event.target.value)
    }
    function handleDegree(event) {
        setDegree(event.target.value)
    }
    function handleCompanyName(event) {
    setCompanyName(event.target.value)
    }
    function handlePosition(event) {
        setPosition(event.target.value)
    }
    function handleTextArea(event) {
        setTextArea(event.target.value)
    }
    function handleFromDate(event) {
        setFromDate(event.target.value)
    }
    function handleToDate(event) {
        setToDate(event.target.value)
    }
    function handleSubmit(e) {
       e.preventDefault() ;
    //    console.log(blog)

    }
    return (
        <div className="container">
        <div className="header">
            <h1>My Cv</h1>
        </div>
        <div className="content">
            {/* <h1>this is the main container</h1> */}
            <div className="general-info">
                <div className="General">
                <h2>General Info</h2>
                {/* <form action="" onSubmit={handleSubmit} className="form"> */}
                <input  type="text" placeholder="Name" value={name} onChange={handleName}/>
                <p>Name : {name}</p>
                <input  type="number" placeholder="Phone" value={phone} onChange={handlePhone}/>
                <p>Phone: {phone}</p>
                <input  type="email" placeholder="Email" value={email} onChange={handleEmail}/>
                <p>Email : {email}</p>
                <button onClick={handleSubmit}>submit</button>
                <h3></h3>
                {/* </form> */}
                </div>
            </div>
            <div className="education">
            <div className="Education">
                <h2>Education</h2>
                <input type="text" placeholder="School Name" value={schoolName} onChange={handleSchoolName}/>
                <p>School Name : {schoolName}</p>
                <input type="text" placeholder="Title of study" value={title} onChange={handleTitle}/>
                <p>Title of study : {title}</p>
                <input type="text" placeholder="Degree" value={degree} onChange={handleDegree}/>
                <p>Degree : {degree}</p>
                <button>Add</button>
            </div>
            </div>
            <div className="experience">
            <div className="Experience">
                <h2>Experience</h2>
                <input type="text" placeholder="Company Name" value={companyName} onChange={handleCompanyName}/>
                <p>Company Name : {companyName}</p>
                <input type="text" placeholder="Position Title" value={position} onChange={handlePosition}/>
                <p>Position : {position}</p>
                <textarea placeholder="Main Responsibilities" value={textArea} onChange={handleTextArea}></textarea>
                <p>Responsibilities : {textArea}</p>
                <input type="date" placeholder="From:" value={fromDate} onChange={handleFromDate} />
                <p>From : {fromDate}</p>
                <input type="date" placeholder="To:" value={toDate} onChange={handleToDate}/>
                <p>To : {toDate}</p>

                <button>Add</button>
            </div>
            </div>
        </div>
        <div className="footer">
           <h1>this is the footer</h1>
        </div>
        </div>
    )
}
export default Header