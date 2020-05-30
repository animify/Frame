import React from 'react';
import Navigation from './Navigation';

interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <main className="layout">
            <Navigation />
            <section className="content">{children}</section>
        </main>
    );
}
