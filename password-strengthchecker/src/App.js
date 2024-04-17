import "./App.css";
import { useState, useEffect } from "react";
import {hasNumber, hasUpperCase, hasLowerCase, hasSpecialCharacter} from "./utilis";
/**
 * password length 6 to 32
 * strength = password length + character type
 * max_strength =10
 * if UCL then strength +=1
 * if LCL then strength +=1
 * if digit then strength +=1
 * if sc then strength +=1
 * password.length   < 3 then strength =0
 * 
 */
function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [progressBarStyles, setProgressBarStyles] = useState({
    width:"0%",
    backgroundColor: "transparent",
  });

  const handlePasswordChange =(e) => {
    const value= e.target.value;
    setPassword(value)
  }

  useEffect(() => {
    /**
     * update strength based on password length and character type
     * update progressbar color based on strength
     */
    const updatedStyles = {
      backgroundColor:"red",

    }
    let totalStrength =0;
    if(password.length > 3) {
      // MAX_PASSWORD_LENGTH=32
      // MAX_STRENGTH =10
      // MAX_STRENGTHBY_CHARCTERTYPE = 4(1 uper case+1 lower case + 1 digit + 1 special character)
      // MAX_STRENGTHBY_PASSWORDLENGTH is MAX_STRENGTH(10) - MAX_STRENGTHBY_CHARCTERTYPE(4) = 6
      // MAX_PASSWORD_LENGTH(32)/MAX_STRENGTHBY_PASSWORDLENGTH(6)  = 5, so for every 5 password chracters
      // strength increments by 1(this u can chk with interviewer however, I am taking 3)

      // 6 is used bcs strength by password length can only 6 and 
     // 3 is used due to this logic MAX_PASSWORD_LENGTH(32)/MAX_STRENGTHBY_PASSWORDLENGTH(6)
      const strengthByLength = Math.min(6, Math.floor(password.length/3));
      let strengthByCharacterType = 0;

      if(hasNumber.test(password)){
        strengthByCharacterType +=1;
      }
      if(hasUpperCase.test(password)){
        strengthByCharacterType +=1;
      }
      if(hasLowerCase.test(password)){
        strengthByCharacterType +=1;
      }
      if(hasSpecialCharacter.test(password)){
        strengthByCharacterType +=1;
      }
      totalStrength = strengthByCharacterType + strengthByLength;
    }
    else {
      totalStrength=0
    }
    updatedStyles.width= `${totalStrength*10}%`
    if(totalStrength >8){
      updatedStyles.backgroundColor="green";

    }
    else if(totalStrength >6) {
      updatedStyles.backgroundColor="orange";
    }

    setStrength(totalStrength)
    setProgressBarStyles(updatedStyles);
  },[password])

  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <input type="text" value={password} onChange={handlePasswordChange}/>
      <div className="progress-container">
        <div className="progress-bar" style={{...progressBarStyles}}/>
      </div>
      <p>Strength of your password(out of 10) is {strength}</p>
    </div>
  );
}

export default App;
