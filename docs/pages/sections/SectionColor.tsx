import React from 'react';
import Snippet from '../../components/Snippet';
import { red100 } from '../../exports/color.scss';

console.log('colors', red100);

export default function SectionColor() {
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
