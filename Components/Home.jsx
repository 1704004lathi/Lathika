import React from "react";
import './Home.css';
import logo3 from '../assets/logo3.jpeg';
function App()
{
    return(
        <div>
        <div className="home">

              <h1 className='G'>Fresh and Healthy Veggies</h1>
               <h1 className='K'>Organic Market</h1>
               <p className="hi">Organic food is food produced by methods that comply with the standard of farming </p>
               <p className="oop">The gift of love. The gift of peace. The gift of happiness. May all these be yours at Christmas.
</p>
               
               <img src={logo3} alt="" align='down' className='logo3' />
               <span></span><break></break><break></break><break>
               </break>
               <form><table><tr><td>
               <button className='but' >Shop now</button></td></tr></table></form>
        </div>
        </div>
    )
}
export default App;