import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { html } from 'js-beautify';
import { codeStyle } from '../defaults';

interface Props {
    children: React.ReactElement;
}

export default function Example({ children }: Props) {
    const s = renderToStaticMarkup(children);

    const codeString = html(s);
    console.log(codeString);

    return (
        <div className="example">
            <div className="preview">{children}</div>
            <div className="code">
                <SyntaxHighlighter language="html" style={codeStyle}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
