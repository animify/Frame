import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <>
            <Helmet title="Frame CSS" />
            <Layout>
                <h4>Home</h4>
            </Layout>
        </>
    );
}
