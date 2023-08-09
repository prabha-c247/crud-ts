import { useState, useEffect } from 'react';
import "./Users.style.css";
import axios from 'axios';
import { User } from './Users.type';
import { Link } from 'react-router-dom';

const Users = () => {

    const [allUsers, setAllUsers] = useState<Array<User>>([]);

    useEffect(() => {
        // const storedData = JSON.parse(localStorage.getItem("alluser"))
        // const storedData = localStorage.getItem("alluser");

        // if (storedData.length !== 0) {
        //     setAllUsers(storedData);
        // }
        // else (
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {

                setAllUsers(res.data)
                localStorage.setItem('alluser', JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err)
            })
        // )
    }, [])

    const handleDelete = (uId: number) => {
        const updatedUser = allUsers.filter((user) => user.id !== uId)
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
                <Link to="/create" allUsers={allUsers}><input type="button" value='Add User' /></Link>
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
                                        <td><input type="button" value="Delete" onClick={() => { handleDelete(user.id)}}/></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </section>
        </div>

    )
}

export default Users
