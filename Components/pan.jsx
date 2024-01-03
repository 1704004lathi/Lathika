import React from 'react';
import './pan.css';
function PanCard()
{
    return(
        <div className="pan">
            <center><h1>PAN Card Information</h1></center>
            <fieldset>
                <b>Note</b>: For orders exceeding the value of ₹2,00,000
                <br></br>
                PAN Card details are mandatory.
            </fieldset><br></br><br></br>
            <fieldset><center><table><tr>
            <td><b>PAN Number</b>
                <br></br></td>
                <td><input type="number"></input></td></tr>
            </table></center>
            <br></br>
            <center><table><tr>
                <td><input type='checkbox'></input>
                I agree to the terms mentioned in the declaration.
                </td><br></br></tr>
                <center><h6><button>VIEW DECLARATION</button></h6>                                                                                                                                                       
            <button>Confirm</button></center>
            </table></center></fieldset>
        </div>

    );

}

export default PanCard;