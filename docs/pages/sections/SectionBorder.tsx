import React from 'react';
import Snippet from '../../components/Snippet';

export default function SectionBorder() {
    return (
        <>
            <Snippet title="Border Top" description="Use flexbox for the good results." highlightKeywords={['bt']}>
                <div className="bt w25 m6 p6 yellow100@bg red100@border"></div>
            </Snippet>
            <Snippet title="Border Left" description="Use flexbox for the good results." highlightKeywords={['bl']}>
                <div className="bl w25 m6 p6 yellow100@bg red100@border"></div>
            </Snippet>
            <Snippet title="Border Right" description="Use flexbox for the good results." highlightKeywords={['br']}>
                <div className="br w25 m6 p6 yellow100@bg red100@border"></div>
            </Snippet>
            <Snippet title="Border Bottom" description="Use flexbox for the good results." highlightKeywords={['bb']}>
                <div className="bb w25 m6 p6 yellow100@bg red100@border"></div>
            </Snippet>
            <Snippet title="Border Around" description="Use flexbox for the good results." highlightKeywords={['ba']}>
                <div className="ba w25 m6 p6 yellow100@bg red100@border"></div>
            </Snippet>
            <Snippet title="Border None" description="Use flexbox for the good results." highlightKeywords={['bn']}>
                <div className="bn w25 m6 p6 yellow100@bg red100@border"></div>
            </Snippet>
        </>
    );
}
