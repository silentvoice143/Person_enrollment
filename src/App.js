import "./App.css";
import Card from "./Card";
import person from "./person";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [avatar, setAvatar] = useState("");
  const [gender, setGender] = useState("");
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [skills, setSkills] = useState({
    html: false,
    css: false,
    js: false,
  });

  const [selectedOption, setSelectedOption] = useState("");
  const [enroll_person, setEnroll] = useState([]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);

    setGender(event.target.value);
    // console.log(sex);
  };

  const handleskills = (event) => {
    // updating an object instead of a Map
    setSkills({ ...skills, [event.target.value]: event.target.checked });
  };

  function form_submit(e) {
    e.preventDefault();
    let data = [
      ...enroll_person,
      {
        name: name,
        email: email,
        website: website,
        gender: gender,
        avatar: avatar,
        skills: skills,
      },
    ];
    console.log(data);
    createCard(data);
    setEnroll(data);
    // console.log(enroll_person);
  }

  const createCard = (data) => {
    // console.log("card created");
    return (
      <Card
        name={data.name}
        email={data.email}
        website={data.website}
        gender={data.gender}
        avatar={data.avatar}
        skills={data.skills}
      />
    );
  };

  return (
    <div className="App">
      <nav className="navbar">Register User</nav>
      <div className="container">
        <div className="register">
          <form action="">
            <h1 className="enroll">Register User</h1>
            <div className="input">
              <label htmlFor="name">Name: </label>
              <input
                class="input-box"
                type="text"
                name=""
                id="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  // console.log(name);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email: </label>
              <input
                class="input-box"
                type="text"
                name=""
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="website">Website: </label>
              <input
                class="input-box"
                type="text"
                name=""
                id="website"
                value={website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="avatar">Image Link: </label>
              <input
                class="input-box"
                type="text"
                name=""
                id="avatar"
                value={avatar}
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <span className="gender">Gender: </span>
              <div>
                <input
                  type="radio"
                  name="Male"
                  id="male"
                  value="Male"
                  checked={selectedOption === "Male"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="male">Male </label>
                <input
                  type="radio"
                  name="Female"
                  id="female"
                  value="Female"
                  checked={selectedOption === "Female"}
                  onChange={handleOptionChange}
                />
                <label htmlFor="female">Female </label>
              </div>
            </div>
            <div className="input">
              <span className="skills">Slills: </span>
              <div>
                <label htmlFor="html">html </label>
                <input
                  type="checkbox"
                  name=""
                  id="html"
                  value="html"
                  checked={skills[html]}
                  onChange={handleskills}
                />
                <label htmlFor="js">js </label>
                <input
                  type="checkbox"
                  name=""
                  id="js"
                  value="js"
                  checked={skills[js]}
                  onChange={handleskills}
                />
                <label htmlFor="css">css </label>
                <input
                  type="checkbox"
                  name=""
                  id="css"
                  value="css"
                  checked={skills[css]}
                  onChange={handleskills}
                />
              </div>
            </div>
            <div className="submit">
              <button className="btn" onClick={form_submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="display">
          <div className="enrolled">Enrolled Persons</div>
          <div className="enrolled_person">{enroll_person.map(createCard)}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
