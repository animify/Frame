import React, { useMemo } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { html } from 'js-beautify';
import { Icon } from 'figicons';
import refractor from 'refractor/core';
import rehype from 'rehype';
import language from 'refractor/lang/markup.js';

refractor.register(language);

interface Props {
    title: React.ReactText | React.ReactNode;
    description: React.ReactText | React.ReactNode;
    children: React.ReactElement;
    highlightKeywords?: string[];
}

export default function Snippet({ title, description, children, highlightKeywords = [] }: Props) {
    const codeString = useMemo(() => {
        const staticMarkup = html(renderToStaticMarkup(children));
        const highlightedMarkup = refractor.highlight(staticMarkup, 'markup');
        const codeString = rehype().stringify({ type: 'root', children: highlightedMarkup }).toString();

        return highlightKeywords.reduce(
            (str, key) => str.replace(new RegExp(key, 'gi'), `<span class="highlight">${key}</span>`),
            codeString,
        );
    }, [children, highlightKeywords]);

    return (
        <section className="snippet">
            <h6>{title}</h6>
            <p>{description}</p>

            <div className="example">
                <div className="preview">{children}</div>
                <div className="code">
                    <div className="header flex items-center justify-between">
                        <small className="fw-bold" style={{ letterSpacing: 0.8 }}>
                            HTML
                        </small>

                        <span className="flex">
                            <Icon name="copy" width={16} height={16} />
                            <small className="fw-medium ml1">Copy</small>
                        </span>
                    </div>

                    <pre>
                        <code dangerouslySetInnerHTML={{ __html: codeString }}></code>
                    </pre>
                </div>
            </div>
        </section>
    );
}
