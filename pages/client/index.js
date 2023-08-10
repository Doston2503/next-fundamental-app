import React from 'react';
import {useState, useEffect} from "react";

function Index(props) {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                setUsers(data)
            })
    }, []);

    return (
        <div className="container">
            <div className="row my-5">
                {loading ? <h4>Loading...</h4> :
                    <>
                        {users?.map((item, index) => (
                            <div className="col-xl-4 my-3" key={index}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>{item?.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                }
            </div>
        </div>
    );
}

export default Index;