import './adress.css';
export const AdressNo = () => {
  return (
    <div className="App">
      <center><h1 className="kii">
        Your Address!!
      </h1></center>
     <fieldset id="field"><p><b>Address Details</b></p>
     <center><form><table>
      <tr><td>Pin Code* </td><td><input type="number" placeholder='Enter your pincode'></input></td><br></br><br></br></tr>
      <tr><td>House No. </td><td><input type="number" placeholder='Enter your house no'></input></td><br></br><br></br></tr>
      <tr><td>Floor No. </td><td><input type="number" placeholder='Enter your floor no'></input></td><br></br><br></br></tr>
      <tr><td>Tower No. </td><td><input type="number" placeholder='Enter your tower no'></input></td><br></br><br></br></tr>
      <tr><td>Building/Apartment Name </td><td><input type="text" placeholder='Enter your building name'></input></td><br></br><br></br></tr>
      <tr><td>Address* </td><td><input type="text" placeholder='Enter your address'></input></td><br></br><br></br></tr>
      <tr><td>Landmark/Area* </td><td><input type="text" placeholder='Enter your area'></input></td><br></br><br></br></tr>
      <tr><td>City,State </td><td><input type="text" placeholder='Enter your city/state'></input></td><br></br></tr></table></form></center></fieldset><br></br>
      <center><h2>Delivery Contact Details</h2></center>
      <fieldset id="field1">
      <p><b>This mobile number will receive an OTP,required for collecting the order.</b></p>
      <center><form>
        <table>
        <tr><td>Receivers Name*</td><td><input type="text" placeholder='Enter your name'></input></td><br></br><br></br></tr>
        <tr><td>Receivers Number*</td><td><input type="number" placeholder='Enter your mobile no'></input></td><br></br></tr></table></form></center><br></br></fieldset><br></br>
        <center><button type="button">SAVE ADDRESS</button></center>
    </div>
  );
}