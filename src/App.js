import React,{useState} from "react";
import  ReactDOM  from "react";
import "./index.css"


const App = () => {
  //input
  const [message, setMessage] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
    //background color
    // const [selectedColor, setSelectedColor] = useState(''); // State to hold the selected color

    //  const handleChange = (e) => {
    //  setSelectedColor(e.target.value); // Update the selected color state when the select value changes
     }
  
  

  return (
    <div>
      <input class = "message"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        size={1000}
        style={{height:"500px", width:"1000px"}}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

      />
      <div>

      <label>Theme Select
      <select>
       <option value="dark">Dark</option>
       <option value="light">Light</option>
       <option value="pink">Pink</option>
       <option value="green">Green</option>
       <option value="blue">Blue</option>
     </select>
      </label>

</div>
<div>
      <h1>{message}</h1>
    </div>
    </div>
  );
  };
export default App;