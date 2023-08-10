import { useEffect, useState }  from "react";
import {useParams, useNavigate,Link} from 'react-router-dom';
import './Create.style.scss';

interface FormData {
  id: string | undefined,
  name:string,
  username:string,
  email:string
}

export const Update =()=>{
 
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState<FormData>({
    id: (id),
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem('alluser') || '[]') 
    const userEdit = allUsers.find((user:FormData) => user.id === (id));
    if (userEdit) {
      setFormData(userEdit);
    }

  }, [id])

  const handleEdit = () => {   
    const allUsersString = localStorage.getItem('alluser') || "[]";
    const allUsers: FormData[] = JSON.parse(allUsersString);
        // console.log('allUsers:', allUsers);
    const updatedUsers = allUsers.map((user:FormData) =>
      user.id === (id) ? formData : user
    );
    localStorage.setItem('alluser', JSON.stringify(updatedUsers));
    navigate('/');
  }


    return(
      <div className='form-container'>
      <form className='form-container'>
        <div>
          <label htmlFor='id'>Id  :</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor="name">Name  :</label>
          <input type="text"  />
        </div>
        <div>
          <label htmlFor="username">Username  :</label>
          <input type="text"  />
        </div>
        <div>
          <label htmlFor="email">Email  :</label>
          <input type="text" />
        </div>
        <div>
          <Link to="/"><input type="button" value="Back" /></Link>
          <input type="submit" value="Edit User" onClick={handleEdit}/>
        </div>
      </form>
    </div>
    )
}