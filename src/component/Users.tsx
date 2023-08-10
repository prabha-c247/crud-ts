import { useState, useEffect } from 'react';
import "./Users.style.scss";
import axios from 'axios';
import { User } from './Users.type';
import { Link } from 'react-router-dom';
import { Create } from './Create';

const Users = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [allUsers, setAllUsers] = useState<Array<User>>([]);

    useEffect(() => {

        // const storedData = isJsonString(localStorage.getItem("alluser")){
        //     setAllUsers(JSON.parse(storedData))
        // }

        const storedData = localStorage.getItem("alluser");
        console.log(storedData?.length)
        if ((storedData != null)) {
            setAllUsers(JSON.parse(storedData));
        }
        else (
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {

                setAllUsers(res.data)
                localStorage.setItem('alluser', JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err)
            })
        )
    }, [])

    // const allData = [allUsers, setAllUsers]
    // const navigate = useNavigate();
    // const goToCreate = () =>{
    //     navigate('/create', {state:{allUsers:allUsers, setAllUsers:setAllUsers}})    
    // }

    const handleDelete = (uId: number) => {
        const updatedUser = allUsers.filter((user: any) => user.id !== uId)
        setAllUsers(updatedUser);
        localStorage.setItem('alluser', JSON.stringify(updatedUser));
    }

    return (
        <div className='container'>
            <article className='article-header'>
                <header>
                    <h1>React: CRUD with TypeScript.</h1>
                </header>
            </article>
            <section className='section-content'>
                {/* <Create allUsers={allUsers} setAllUsers={setAllUsers}/> */}
                {/* <button className='' onClick={goToCreate}>Add User</button> */}
                <Link to="/create" onClick={()=>{setIsOpen(true)}}><input type="button" value='Add User' /></Link>
                {
                    isOpen ?
                        <Create allUsers={allUsers} setAllUsers={setAllUsers} />
                        :
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allUsers.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                {/* <td>{`${user.firstname}${user.lastname}`}</td> */}
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td><Link to={`/update/${user.id}`}><input type="button" value="Edit" /></Link></td>
                                                <td><input type="button" value="Delete" onClick={() => { handleDelete(user.id) }} /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                }
            </section>
        </div>

    )
}

export default Users
