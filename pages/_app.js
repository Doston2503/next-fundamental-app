import Head from "next/head";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../components/Layout";
import { NextSeo } from 'next-seo';
import '../style/globals.css'
import '../style/Globall.module.scss'
export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <NextSeo
                title="Simple Usage Example"
                titleTemplate="Doston Rajabov"
                description="A short description goes here."
            />

            <main>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </main>
        </>
    )
}
