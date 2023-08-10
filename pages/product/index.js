import React from 'react';

export async function getServerSideProps() {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    return {
        props: {
            products: data,
        },
    };
}

function Index({products}) {
    return (
        <div className="container">
            <div className="row my-5">
                {products?.map((item)=>(
                    <div className="col-xl-4 my-3" key={item.id}>
                        <div className="card h-100">
                            <div className="card-header">
                                <h6>{item.title}</h6>
                            </div>
                            <div className="card-body" style={{height:'300px'}}>
                                <img src={item.image} className="w-100 p-5" alt="Product image"/>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Index;