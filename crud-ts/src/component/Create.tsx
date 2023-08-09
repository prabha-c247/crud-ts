import { useState, Dispatch, SetStateAction} from 'react';
import { Link } from 'react-router-dom';
import './Create.style.css';

interface formdata {
  id?: Number,
  name?: String,
  username?: String,
  email?: String
}
export interface Props = {
  allUsers: allUsers
  setFormData: Dispatch<SetStateAction<any>>
}
export const Create = ({ allUsers, setAllUsers }: Props) => {
  const [formData, setFormData] = useState<formdata>({
    id: 0,
    name: "",
    username: "",
    email: ""
  })
  let data = localStorage.getItem('alluser')
  // const [users, setUsers]= useState(data)  
  // const [allUsers,setFormData] = props[]

  //  to add new user function
  const handleAddUser = (data: formdata) => {
    const newAllUsers = setFormData([...allUsers, formData])
    localStorage.setItem('alluser', JSON.stringify(newAllUsers));
  }

  // when the user fill the form
  const onInputChanged (e: any) => {
    setFormData(e.target.value)
  }
  return (

    <div className='form-container'>
      <form className='form-container'>
        <div>
          <label htmlFor='id'>Id  :</label>
          <input type="number" value={formData.id} onChange={onInputChanged} />
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
          <input type="submit" value="Add User" onClick={handleAddUser} />
        </div>
      </form>
    </div>
  )
}
