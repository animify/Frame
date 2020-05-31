import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Snippet from '../components/Snippet';
import { useRouteMatch } from 'react-router';
import { navigation } from '../defaults';
import { SectionType } from '../types';

export default function Section() {
    const { params } = useRouteMatch<{ section: SectionType }>();
    const item = navigation[params.section.toLowerCase()];

    if (!item) {
        // Route to 404
    }

    return (
        <>
            <Helmet title="Frame CSS" />
            <Layout>
                <h4>{item.displayName}</h4>

                <Snippet title="Flex" description="Use flexbox for the good results." highlightKeywords={['flex']}>
                    <div className="flex">
                        <div className="w25 m6 p6 black100@bg"></div>
                        <div className="w25 m6 p6 black100@bg"></div>
                        <div className="w25 m6 p6 black100@bg"></div>
                        <div className="w25 m6 p6 black100@bg"></div>
                    </div>
                </Snippet>
            </Layout>
        </>
    );
}
