import React from 'react';
import Snippet from '../../components/Snippet';

export default function SectionFlexBox() {
    return (
        <>
            <Snippet title="Flex" description="Use flexbox for the good results." highlightKeywords={['flex-column']}>
                <div className="flex flex-column">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 red100@bg"></div>
                </div>
            </Snippet>
            <Snippet title="Flex" description="Use flexbox for the good results." highlightKeywords={['flex-row']}>
                <div className="flex flex-row">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 red100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Flex"
                description="Use flexbox for the good results."
                highlightKeywords={['flex-column-reverse']}
            >
                <div className="flex flex-column-reverse">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 red100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Flex"
                description="Use flexbox for the good results."
                highlightKeywords={['flex-row-reverse']}
            >
                <div className="flex flex-row-reverse">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p6 red100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Items Start"
                description="Use flexbox for the good results."
                highlightKeywords={['items-start']}
            >
                <div className="flex items-start">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p8 red100@bg"></div>
                    <div className="w25 m6 p4 yellow100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Items End"
                description="Use flexbox for the good results."
                highlightKeywords={['items-end']}
            >
                <div className="flex items-end">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p8 red100@bg"></div>
                    <div className="w25 m6 p4 yellow100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Items Center"
                description="Use flexbox for the good results."
                highlightKeywords={['items-center']}
            >
                <div className="flex items-center">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p8 red100@bg"></div>
                    <div className="w25 m6 p4 yellow100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Items Baseline"
                description="Use flexbox for the good results."
                highlightKeywords={['items-baseline']}
            >
                <div className="flex items-baseline">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p8 red100@bg"></div>
                    <div className="w25 m6 p4 yellow100@bg"></div>
                </div>
            </Snippet>
            <Snippet
                title="Items Stretch"
                description="Use flexbox for the good results."
                highlightKeywords={['items-stretch']}
            >
                <div className="flex items-stretch">
                    <div className="w25 m6 p6 black100@bg"></div>
                    <div className="w25 m6 p8 red100@bg"></div>
                    <div className="w25 m6 p4 yellow100@bg"></div>
                </div>
            </Snippet>
        </>
    );
}
