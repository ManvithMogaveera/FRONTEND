const regbtn = document.getElementById("signupbutton");
const msgContainer = document.getElementById("msgcontainer");
const submitBtn = document.getElementById("submitbutton2");
const heading = document.getElementById("heading1");
const msg = document.getElementById("msg");

let isSignUpMode = true; 


regbtn.addEventListener("click", () => {
    isSignUpMode = !isSignUpMode; 

    msgContainer.style.transform = isSignUpMode ? "translateX(0%)" : "translateX(-103%)";
    msgContainer.style.width = "50%";  
    msgContainer.style.height = "100%"; 
    msgContainer.style.padding = "5%";  

    regbtn.innerHTML = isSignUpMode ? "Sign Up" : "Login";
    heading.innerHTML = isSignUpMode ? "Hello, Friend!" : "Welcome Back!";
    msg.innerHTML = isSignUpMode
        ? "Register with your personal details to use all features."
        : "Enter your credentials to access all features.";
});

submitBtn.innerHTML = "Submit";

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    const professionSelect = document.getElementById("profession");
    
    function addDynamicFields() {
        let extraFields = document.getElementById("extra-fields");
        if (extraFields) {
            extraFields.remove();
        }
        
        extraFields = document.createElement("div");
        extraFields.id = "extra-fields";
        
        const selectedProfession = professionSelect.value;
        
        if (selectedProfession === "student") {
            extraFields.innerHTML = `
                <label for="gender">Gender</label>
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label for="college">College Name</label>
                <input type="text" id="college">
                <label for="year">Year</label>
                <input type="text" id="year">
                <label for="password">Password</label>
                <input type="password" id="password">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password">
            `;
        } else if (selectedProfession === "organisation") {
            extraFields.innerHTML = `
                <label for="org-name">Organization Name</label>
                <input type="text" id="org-name">
                <label for="org-number">Contact Number</label>
                <input type="text" id="org-number">
                <label for="password">Password</label>
                <input type="password" id="password">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password">
            `;
        } else if (selectedProfession === "nss") {
            extraFields.innerHTML = `
                <label for="clg-name">College Name</label>
                <input type="text" id="clg-name">
                <label for="clg-number">Contact No.</label>
                <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; overflow: hidden; width: 100%; max-width: 300px;">
                    <span style="background: #f0f0f0; padding: 10px; color: #333; font-weight: bold; border-right: 1px solid #ccc;">+91-</span>
                    <input type="number" id="clg-number" style="flex: 1; padding: 5px; border: none; outline: none; font-size: 14px;" placeholder="XXXXXXXXXX" maxlength="10">
                </div>
                <label for="password">Password</label>
                <input type="password" id="password">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password">
            `;
        } else if (selectedProfession === "volunteer") {
            extraFields.innerHTML = `
                <label for="gender">Gender</label>
                <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <label for="volunteer-contact">Contact No.</label>
                <div style="display: flex; align-items: center; border: 1px solid #ccc; border-radius: 5px; overflow: hidden; width: 100%; max-width: 300px;">
                    <span style="background: #f0f0f0; padding: 10px; color: #333; font-weight: bold; border-right: 1px solid #ccc;">+91-</span>
                    <input type="number" id="volunteer-contact" style="flex: 1; padding: 5px; border: none; outline: none; font-size: 14px;" placeholder="XXXXXXXXXX" maxlength="10">
                </div>
                <label for="password">Password</label>
                <input type="password" id="password">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password">
            `;
        }
        
        signupForm.appendChild(extraFields);
    }
    
    
    addDynamicFields();
    
    professionSelect.addEventListener("change", addDynamicFields);
});


submitBtn.addEventListener("click", function (e) {
    
    e.preventDefault();
    document.getElementById("signup-form").scrollIntoView({ behavior: "smooth" });
});   