import React from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../defaults';

export default function Navigation() {
    return (
        <nav className="navigation">
            <h6>Behaviors</h6>
            <ul className="mt3">
                {Object.entries(navigation).map(([section, item]) => (
                    <li key={section}>
                        <Link to={`/section/${section}`}>{item.displayName}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
