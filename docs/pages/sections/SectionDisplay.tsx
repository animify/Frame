import React from 'react';
import Snippet from '../../components/Snippet';

export default function SectionDisplay() {
    return (
        <>
            <Snippet title="Grid" description="Use flexbox for the good results." highlightKeywords={['grid']}>
                <div className="grid">
                    <span className="pv6 red100@bg"></span>
                    <span className="pv6 yellow100@bg"></span>
                    <span className="pv6 red100@bg"></span>
                    <span className="pv6 yellow100@bg"></span>
                    <span className="pv6 red100@bg"></span>
                    <span className="pv6 yellow100@bg"></span>
                    <span className="pv6 red100@bg"></span>
                    <span className="pv6 yellow100@bg"></span>
                    <span className="pv6 red100@bg"></span>
                    <span className="pv6 yellow100@bg"></span>
                    <span className="pv6 red100@bg"></span>
                    <span className="pv6 yellow100@bg"></span>
                </div>
            </Snippet>

            <Snippet title="Flex" description="Use flexbox for the good results." highlightKeywords={['flex']}>
                <>
                    <div className="flex">
                        <span className="m3 p6 red100@bg"></span>
                        <span className="m3 p6 yellow100@bg"></span>
                    </div>
                    <div className="flex">
                        <span className="m3 p6 red100@bg"></span>
                        <span className="m3 p6 yellow100@bg"></span>
                    </div>
                </>
            </Snippet>

            <Snippet
                title="Inline Flex"
                description="Use flexbox for the good results."
                highlightKeywords={['inline-flex']}
            >
                <>
                    <div className="inline-flex">
                        <span className="m3 p6 red100@bg"></span>
                        <span className="m3 p6 yellow100@bg"></span>
                    </div>
                    <div className="inline-flex">
                        <span className="m3 p6 red100@bg"></span>
                        <span className="m3 p6 yellow100@bg"></span>
                    </div>
                </>
            </Snippet>

            <Snippet
                title="Hidden"
                description="Use flexbox for the good results."
                highlightKeywords={['none', 'hidden']}
            >
                <>
                    <div className="m3 p6 red100@bg"></div>
                    <div className="none m3 p6 yellow100@bg"></div>
                    <div className="hidden m3 p6 blue100@bg"></div>
                    <div className="m3 p6 green100@bg"></div>
                </>
            </Snippet>

            <Snippet
                title="Table"
                description="Use flexbox for the good results."
                highlightKeywords={['table-cell', 'table-row', 'table']}
            >
                <div className="table">
                    <div className="table-row">
                        <div className="table-cell p6 yellow100@bg"></div>
                        <div className="table-cell p6 red100@bg"></div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell p6 red100@bg"></div>
                        <div className="table-cell p6 yellow100@bg"></div>
                    </div>
                </div>
            </Snippet>
        </>
    );
}
