import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { useRouteMatch } from 'react-router';
import { navigation } from '../defaults';
import { SectionType } from '../types';

export default function Section() {
    const { params } = useRouteMatch<{ section: SectionType }>();
    const item = navigation[params.section.toLowerCase() as SectionType];

    if (!item) {
        // Route to 404
    }

    return (
        <>
            <Helmet title="Frame CSS" />
            <Layout>
                <h4>{item.displayName}</h4>

                <div className="section">
                    <item.page />
                </div>
            </Layout>
        </>
    );
}
