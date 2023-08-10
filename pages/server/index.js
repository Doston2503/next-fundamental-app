import React from 'react';

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: {
            users: data,
        },
    };
}

function Index({users}) {
    return (
        <div className="container">
            <div className="row my-5">
                {users?.map((item, index) => (
                    <div className="col-xl-4 my-3" key={index}>
                        <div className="card">
                            <div className="card-body text-center">
                                <h4>{item.name}</h4>
                                <h6>{item.email}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Index;