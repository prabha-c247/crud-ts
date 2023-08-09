import React from "react";
import './Create.style.css';

export const Update =()=>{

    return(
      <div className='form-container'>
      <form className='form-container'>
        <div>
          <label htmlFor='id'>Id  :</label>
          <input type="number" value={formData.id}/>
        </div>
        <div>
          <label htmlFor="name">Name  :</label>
          <input type="text" value={formData.name} />
        </div>
        <div>
          <label htmlFor="username">Username  :</label>
          <input type="text" value={formData.username} />
        </div>
        <div>
          <label htmlFor="email">Email  :</label>
          <input type="text" value={formData.email} />
        </div>
        <div>
          <Link to="/"><input type="button" value="Back" /></Link>
          <input type="submit" value="Edit User"/>
        </div>
      </form>
    </div>
    )
}