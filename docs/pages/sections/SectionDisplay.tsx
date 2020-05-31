import React from 'react';
import Snippet from '../../components/Snippet';

export default function SectionDisplay() {
    return (
        <>
            <Snippet title="Flex" description="Use flexbox for the good results." highlightKeywords={['flex']}>
                <div className="flex">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 black100@bg"></div>
                </div>
            </Snippet>
        </>
    );
}
