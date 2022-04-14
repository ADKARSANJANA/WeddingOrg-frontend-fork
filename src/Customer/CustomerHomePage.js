import React from 'react';
import { render } from 'react-dom';
const CustomerHome=()=>{
    render();{
    return(
        <div>
          
               
            <div class= "centered">
            <h1><b>Wedding Organizer Customer Page</b></h1>
            </div>
            <div className="main" style={{marginTop: "10px"}}>
            <form>
                <h2>Select Booking Date</h2>
                
                <input type="date" />
                <label>City</label>
                <input type="text" placeholder="Enter City"/>
                <button type="submit" onClick={this.saveDate}>Submit</button>
             </form>

            
            </div>
        </div>
    )}
}
export default CustomerHome









// import axios from 'axios'
// import { useState, useEffect } from 'react'
// // import { url } from '../../Constants/Url'
// import HorizontalSlider from '../components/HorizontalSlider'
// // import { useHistory } from 'react-router-dom'

// const CustomerHome = () => {
//   const [menu, setMenu] = useState([])
  

  
//   useEffect(() => {
//     getMenu()
//   }, [])

  

//   const getMenu = () => {
   
//     axios.get('http://localhost:8080/menu/all').then((response) => {
//       const result = response.data
//       if (result.status === 'success') {
//         setMenu(
//           result.data.map((menu) => {
//             return {
//               ...menu,
//               title: `${menu.menuName}`,
//             }
//           })
//         )
//       } else {
//         alert('error occured while getting all menu')
//       }
//     })
//   }


//   return (
//     <div>
//       <h2 className="page-title">Home</h2>

//       <HorizontalSlider
        
//         items={artists}
//         title="Featured Artists"
//       />
//     </div>
//   )
// }

// export default CustomerHome