import React from 'react';
import Link from "next/link";
import {useEffect} from 'react'
import {useRouter} from "next/router";

function NotFound(props) {
    const router= useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[]);

    return (
        <div>
            <h1>404 | Page Not Found</h1>
            <h2>Back to <Link href='/'>Home</Link></h2>
        </div>
    );
}

export default NotFound;