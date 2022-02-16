const container2 = document.querySelector('.rt2');

let UID;
let EMAIL = sessionStorage.getItem("emailField");
console.log(EMAIL);

const renderPosts = async () => {
    let url = `http://localhost:3000/UserTemplate?emailField=${EMAIL}`;
    // let url = `http://localhost:3000/UserTemplate/10`;

    const res = await fetch(url);
    const users = await res.json();
    console.log(users);
    UID = users[0].id;
    console.log(UID);

  
  const template = ` <h2 class="text-center">Template 2</h2>
    <div class="container commonFont" id="showInformation">
      <div class="row">
        <!-- START OF PERSONAL INFORMATON -->

        <div class="col-4">
          <h3 class="text-center">Personal Information</h3>

          <!-- Start of full name -->
          <div class="form-group my-2">
            <label for="nameField">Full Name</label>
            <input
              type="text"
              class="form-control"
              id="nameField"
              placeholder="Enter full name"
              value = "${users[0].nameField}"
            />
            <div id="nameErrorDiv"></div>
          </div>
          <!-- End of full name -->

          <!-- start of father name -->

          <div class="form-group my-2">
            <label for="fatherNameField">Father's Name</label>
            <input
              type="text"
              class="form-control"
              id="fatherNameField"
              placeholder="Enter father's name"
              value = "${users[0].fatherNameField}"
            />
            <div id="fatherNameErrorDiv"></div>
          </div>

          <!-- End of father name -->

          <!-- start of address -->
          <div class="form-group my-3">
            <label for="addressField">Address</label>
            <input
              type="text"
              class="form-control"
              id="addressField"
              placeholder="Enter Address"
              value = "${users[0].addressField}"
            />
            <div id="addressErrorDiv"></div>
          </div>
          <!-- End of address -->

          <!-- start of state -->

          <div class="form-group my-3">
            <label for="stateField">State</label>
            <input
              type="text"
              class="form-control"
              id="stateField"
              placeholder="Enter State"
              value = "${users[0].stateField}"
            />
            <div id="stateErrorDiv"></div>
          </div>

          <!-- End of state -->

          <!-- Start of email -->

          <div class="form-group my-3">
            <label for="emailField">Email</label>
            <input
              type="email"
              class="form-control"
              id="emailField"
              placeholder="Enter Email"
              value = "${users[0].emailField}"
            />
            <div id="emailErrorDiv"></div>
          </div>

          <!-- End of email -->

          <!-- start of age -->

          <div class="form-group my-3">
            <label for="ageField">Age</label>
            <input
              type="text"
              class="form-control"
              id="ageField"
              placeholder="Enter Age"
               value = "${users[0].ageField}"
            />
            <div id="ageErrorDiv"></div>
          </div>
          <!-- End of age -->

          <!-- Start of birtdate -->
          <div class="form-group my-3">
            <label for="birhdayField">Birthday</label>
            <input
              type="date"
              class="form-control"
              id="birthdayField"
              placeholder="Enter Address"
              value = "${users[0].birthdayField}"
            />
          </div>
          <!-- End of Birthdate -->

          <!-- Start of contact -->

          <div class="form-group my-3">
            <label for="contactField">Mobile Number</label>
            <input
              type="mobile"
              class="form-control"
              id="contactField"
              placeholder="Enter Contact"
              value = "${users[0].contactField}"
            />
            <div id="contactErrorDiv"></div>
          </div>

          <!-- End of Contact -->

          <!-- Start of gender -->
          <div>
            <label for="genderField">Select Gender</label> <br />
            <input
              type="radio"
              name="gender"
              id="maleField"
              value="Male"
              class="gender"
            />
            Male
            <input
              type="radio"
              name="gender"
              id="femalField"
              value="Female"
              class="gender"
            />Female
            <div id="genderErrorDiv"></div>
          </div>
          <!-- End of gender -->

          <!-- Start of nationality -->

          <div class="form-group my-3">
            <label for="nationalityField">Nationality</label>
            <input
              type="text"
              class="form-control"
              id="nationalityField"
              placeholder="Enter Nationality"
              value = "${users[0].nationalityField}"
            />
            <div id="nationalityErrorDiv"></div>
          </div>

          <!-- End of Nationality -->

          <!-- start of marital status -->
          <div class="form-group my-3">
            <label for="maritalStatusField">Marital Status</label>
            <input
              type="text"
              class="form-control"
              id="maritalStatusField"
              placeholder="Enter Marital status"
              value = "${users[0].maritalStatusField}"
            />
            <div id="maritalStatusErrorDiv"></div>
          </div>
          <!-- End of marital status -->

          <!-- Start of hobbies -->
          <div class="form-group my-3">
            <label for="hobbyField">Hobbies</label>
            <input
              type="text"
              class="form-control"
              id="hobbyField"
              placeholder="Enter hobbies"
              value = "${users[0].hobbyField}"
            />
          </div>

          <!-- End of hobbies -->

          <!-- Start of languages known -->

          <div class="form-group my-3">
            <label for="languageField">Languages Known</label> <br />
            <input
              type="radio"
              id="languagesField"
              value="English"
              class="language languageSelect"
            />
            &nbsp; English
            <input
              type="radio"
              id="languagesField"
              value="Hindi"
              class="language languageSelect"
            />
            &nbsp; Hindi
            <input
              type="radio"
              id="languagesField"
              value="Marathi"
              class="language languageSelect"
            />
            &nbsp; Marathi
          </div>

          <!-- End of languages known -->
        </div>

        <!-- END OF PERSONAL INFORMATION -->

        <!-- START OF EDUCATIONAL DETAILS -->

        <div class="col-4">
          <h3>Educational Information</h3>
          <div class="form-group my-3">
            <label for="tenthField">10th</label>
            <input type="number" class="form-control" id="tenthField" value = "${users[0].tenthField}"/>
            <div id="tenthErrorDiv"></div>
          </div>

          <div class="form-group my-3">
            <label for="twelthField">12th</label>
            <input type="number" class="form-control" id="twelthField" value = "${users[0].twelthField}"/>
            <div id="twelthErrorDiv"></div>
          </div>

          <div class="form-group my-3">
            <label for="graduationField">Graduation</label>
            <input type="number" class="form-control" id="graduationField" value = "${users[0].graduationField}"/>
            <div id="graduationErrorDiv"></div>
          </div>

          <div class="form-group my-3">
            <label for="postgraduationField">Post Graduation</label>
            <input type="number" class="form-control" />
          </div>
        </div>

        <!-- END OF EDUCATIONAL QUALIFICATION -->

        <!-- START OF WORK EXPERIENCE -->

        <div class="col-4">
          <h3 class="text-center">Work Qualification</h3>
          <div class="form-group my-3">
            <label for="objectiveField">Objective</label>
            <textarea
              name=""
              id="objectiveField"
              cols="60"
              rows="10"
            ></textarea>
          </div>
        </div>

        <!-- END OF WORK EXPERIENCE -->
      </div>

      <div class="container text-center my-3">
        <button onclick="generateCV()" class="btn btn-primary btn-lg">
          Generate Resume
        </button>
      </div>
    </div>

    <!-- START OF TEMPLATE -->

    <div id="show">
      <div class="container resume">
        <h1 class="text-center">Resume</h1>
        <div class="row my-3">
          <div class="col-md-6">
            <p><b>Name:</b></p>
            <p id="nameT"></p>
            <p><b>Address:</b></p>
            <p id="addressT"></p>
            <p><b>State:</b></p>
            <p id="stateT"></p>
            <p><b>Email:</b></p>
            <p id="emailT"></p>
          </div>
        </div>

        <div class="row my-5">
          <div class="col-12">
            <h3 class="p-3 mb-2 bg-dark text-white">Career Objective :</h3>
            <p id="objectiveT">-</p>
          </div>
        </div>

        <div class="row my-5">
          <h3 class="p-3 mb-2 bg-dark text-white">Personal Profile</h3>
          <div class="col-md-6">
            <p class="para"><b>Father's Name</b> <span>:</span></p>
            <p class="para"><b>Date of birth</b> <span>:</span></p>
            <p class="para"><b>Marital Status</b> <span>:</span></p>
            <p class="para"><b>Nationality</b> <span>:</span></p>
            <p class="para"><b>Mobile</b> <span>:</span></p>
            <p class="para"><b>Gender</b> <span>:</span></p>
            <p class="para"><b>Age</b> <span>:</span></p>
          </div>

          <div class="col-md-6">
            <p id="fatherT" class="para">-</p>
            <p id="birthdayT" class="para">-</p>
            <p id="maritalT" class="para">-</p>
            <p id="nationalityT" class="para">-</p>
            <p id="contactT" class="para">-</p>
            <p id="genderT" class="para">-</p>
            <p id="ageT" class="para">-</p>
          </div>
        </div>

        <div class="row my-5">
          <h3 class="p-3 mb-2 bg-dark text-white">Educational Qualification</h3>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Standard</th>
                <th scope="col">Marks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>10th</td>
                <td id="tenthT">-</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>12th</td>
                <td id="twelthT">-</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Graduation</td>
                <td id="graduationT">-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr style="height: 5px; color: black; background-color: black" />

        <div class="row my-2">
          <div class="col-md-12">
            <p><b>Languages Known:</b></p>
            <p id="lenguagesT"></p>
          </div>
        </div>

        <div class="row my-2">
          <div class="col-md-12">
            <p><b>Hobbies:</b></p>
            <p id="hobbyT"></p>
          </div>
        </div>
      </div>

      <center>
        <div id="btn">
          <button
            type="button"
            class="btn btn-success"
            onclick="printForm(); clickCounter2()"
          >
            Download
          </button>
        </div>
      </center>
    </div>`

    container2.innerHTML = template;


}

function generateCV() {
  // First name validation start

  var nameField = document.getElementById("nameField").value;
  var nameErrorDiv = document.getElementById("nameErrorDiv");
  var nameT = document.getElementById("nameT");
  if (nameField == "") {
    nameErrorDiv.innerHTML = "*Please enter name";
    return false;
  }
  if (nameField.length <= 3 || nameField.length >= 40) {
    nameErrorDiv.innerHTML = "*Name must be 3 to 40 character";
    return false;
  }

  if (!isNaN(nameField)) {
    nameErrorDiv.innerHTML = "*Name must be chracter";
    return false;
  }
  nameT.innerHTML = nameField;

  //    First Name validation End

  //   Father name validation start

  var fatherNameField = document.getElementById("fatherNameField").value;
  var fatherNameErrorDiv = document.getElementById("fatherNameErrorDiv");
  var fatherT = document.getElementById("fatherT");

  if (fatherNameField == "") {
    fatherNameErrorDiv.innerHTML = "*Please enter name";
    return false;
  }
  if (fatherNameField.length <= 3 || nameField.length >= 40) {
    fatherNameErrorDiv.innerHTML = "*Name must be 3 t0 40 character";
    return false;
  }

  if (!isNaN(fatherNameField)) {
    fatherNameErrorDiv.innerHTML = "*Name must be chracter";
    return false;
  }
  fatherT.innerHTML = fatherNameField;
  //    Father Name Validation End

  // Address Validation
  var addressField = document.getElementById("addressField").value;
  var addressT = document.getElementById("addressT");
  addressT.innerHTML = addressField;

  // Address Validation End

  // State Validation Start
  var stateField = document.getElementById("stateField").value;
  var stateErrorDiv = document.getElementById("stateErrorDiv");
  var stateT = document.getElementById("stateT");

  if (stateField == "") {
    stateErrorDiv.innerHTML = "*State must not be empty";
    return false;
  }
  if (!isNaN(stateField)) {
    stateErrorDiv.innerHTML = "State name must be name";
    return false;
  }

  stateT.innerHTML = stateField;

  // State validation End

  // Email validation start
  var emailField = document.getElementById("emailField").value;
  var emailErrorDiv = document.getElementById("emailErrorDiv");
  var emailT = document.getElementById("emailT");

  if (emailField == "") {
    emailErrorDiv.innerHTML = "Email must not be empty";
    return false;
  }

  if (emailField.indexOf("@") <= 0) {
    emailErrorDiv.innerHTML = "@ must not be at start";
    return false;
  }

  if (
    emailField.charAt(emailField.length - 4) != "." &&
    emailField.charAt(emailField.length - 3) != "."
  ) {
    emailErrorDiv.innerHTML = "** Please fill correct email Id";
    return false;
  }

  emailT.innerHTML = emailField;

  // Email validation End

  // Age Validation start
  var ageField = document.getElementById("ageField").value;
  var ageErrorDiv = document.getElementById("ageErrorDiv");
  var ageT = document.getElementById("ageT");

  if (ageField == "") {
    ageErrorDiv.innerHTML = "Age must not be empty";
    return false;
  }
  if (isNaN(ageField)) {
    ageErrorDiv.innerHTML = "Age must be number";
    return false;
  }
  if (ageField <= 20 || ageField > 50) {
    ageErrorDiv.innerHTML = "Age must be between 20 to 50";
    return false;
  }

  ageT.innerHTML = ageField;

  // Age validation end

  // Birthday validation start

  var birthdayField = document.getElementById("birthdayField").value;
  var birthdayT = document.getElementById("birthdayT");
  birthdayT.innerHTML = birthdayField;

  // End of Birthday Validation

  // Start of contact field
  var contactField = document.getElementById("contactField").value;
  var contactErrorDiv = document.getElementById("contactErrorDiv");
  var contactT = document.getElementById("contactT");
  if (contactField == "") {
    contactErrorDiv.innerHTML = "Please fill the contact details";
    return false;
  }
  if (contactField.length < 10) {
    contactErrorDiv.innerHTML = "Mobile number must be 10 digit";
    return false;
  }

  contactT.innerHTML = contactField;

  // End of contact Field

  // Start of gender validation
  var genderField = document.getElementsByName("gender");
  var genderT = document.getElementById("genderT");
  var genderErrorDiv = document.getElementById("genderErrorDiv");
  //  for(var radio of genderField){
  //      if(radio.checked){
  //          genderT.innerHTML=radio.value;
  //      }
  //      else{
  //          genderErrorDiv.innerHTML="Please select gender";
  //      }
  //  }

  for (var i = 0; i < genderField.length; i++) {
    if (genderField[i].checked) {
      genderT.innerHTML = genderField[i].value;
    }
  }

  // End of gender validation

  // start of languages validation

  var languageSelect = document.getElementsByClassName("languageSelect");
  var lenguagesT = document.getElementById("lenguagesT");
  for (var i = 0; i < languageSelect.length; i++) {
    if (languageSelect[i].checked) {
      lenguagesT.innerHTML = languageSelect[i].value;
    }
  }

  // End of languages validation

  // start of nationality field
  var nationalityField = document.getElementById("nationalityField").value;
  var nationalityErrorDiv = document.getElementById("nationalityErrorDiv");
  var nationalityT = document.getElementById("nationalityT");

  if (nationalityField == "") {
    nationalityErrorDiv.innerHTML = "*Please enter Nationality";
    return false;
  }

  if (!isNaN(nationalityField)) {
    nationalityErrorDiv.innerHTML = "*Nationality field must be chracter";
    return false;
  }
  nationalityT.innerHTML = nationalityField;

  //  End of nationality Field

  // Start of marital status

  var maritalStatusField = document.getElementById("maritalStatusField").value;
  var maritalStatusErrorDiv = document.getElementById("maritalStatusErrorDiv");
  var maritalT = document.getElementById("maritalT");

  if (maritalStatusField == "") {
    maritalStatusErrorDiv.innerHTML = "*Please enter Marital status";
    return false;
  }

  if (!isNaN(maritalStatusField)) {
    maritalStatusErrorDiv.innerHTML = "*Marital status field must be chracter";
    return false;
  }
  maritalT.innerHTML = maritalStatusField;

  // end of marital status

  // Start of hobbies validation
  var hobbyField = document.getElementById("hobbyField").value;
  var hobbyT = document.getElementById("hobbyT");
  hobbyT.innerHTML = hobbyField;
  //    End of hobbies validation

  // EDUCATIONAL DETAILS

  // 10th Validation start
  var tenthField = document.getElementById("tenthField").value;
  var tenthErrorDiv = document.getElementById("tenthErrorDiv");
  var tenthT = document.getElementById("tenthT");
  if (tenthField == "") {
    tenthErrorDiv.innerHTML = "Marks must not be empty";
    return false;
  }
  tenthT.innerHTML = tenthField;
  // 10th Validation End

  // 12th Validation start
  var twelthField = document.getElementById("twelthField").value;
  var twelthErrorDiv = document.getElementById("twelthErrorDiv");
  var twelthT = document.getElementById("twelthT");
  if (twelthField == "") {
    twelthErrorDiv.innerHTML = "Marks must not be empty";
    return false;
  }
  twelthT.innerHTML = twelthField;
  // 12th Validation End

  // Graduation Validation start
  var graduationField = document.getElementById("graduationField").value;
  var graduationErrorDiv = document.getElementById("graduationErrorDiv");
  var graduationT = document.getElementById("graduationT");
  if (graduationField == "") {
    graduationErrorDiv.innerHTML = "Marks must not be empty";
    return false;
  }
  graduationT.innerHTML = graduationField;
  // Graduation Validation End

  //  EDUCATIONAL DETAILS END

  // OBJECTIVE

  var objectiveField = document.getElementById("objectiveField").value;
  var objectiveT = document.getElementById("objectiveT");
  objectiveT.innerHTML = objectiveField;

  // Objective End
  var show = document.getElementById("show");
  show.style.display = "block";

  var showInformation = document.getElementById("showInformation");
  showInformation.style.display = "none";
}

function printForm() {
  var btn = document.getElementById("btn");

  btn.style.display = "none";
  window.print();
}

function clickCounter2() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount2) {
      localStorage.clickcount2 = Number(localStorage.clickcount2) + 1;
    } else {
      localStorage.clickcount2 = 1;
    }
  }
}

console.log(localStorage.clickcount2);

window.addEventListener('DOMContentLoaded', () => renderPosts());