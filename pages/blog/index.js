import React from 'react';
import Image from "next/image";
function Index(props) {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center">
                            <h4>Next Image card</h4>
                        </div>
                        <div className="card-footer text-center">
                            <Image src="next.svg" width={200} height={100}/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white text-center">
                            <h4>Next Image card</h4>
                        </div>
                        <div className="card-footer text-center">
                            <Image src="vercel.svg" width={200} height={100}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;