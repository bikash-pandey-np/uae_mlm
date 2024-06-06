import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Breadcrumb = ({ items }) => {
    return (
        <nav>
            {items.map((item, index) => (
                <span key={index}>
                    <a href={item.link}>{item.name}</a>
                    {index < items.length - 1 && ' > '}
                </span>
            ))}
        </nav>
    );
};

const PageHeader = ({ title, buttonLabel, buttonLink, breadcrumbItems }) => {
    return (
        <div className="p-4 bg-gray-200 mb-2">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">{title}</h1>
                <InertiaLink href={buttonLink} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    {buttonLabel}
                </InertiaLink>
            </div>
            <Breadcrumb items={breadcrumbItems} />
        </div>
    );
};

export default PageHeader;
