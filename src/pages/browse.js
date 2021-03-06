import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { useContent } from '../hooks/index';
import selectionMap from '../utils/selectionMap'

export default function Browse() {

    const { series } = useContent('series');
    const { films } = useContent('films');

    const slides = selectionMap({ series, films });
    console.log(slides);

    return (
        <BrowseContainer slides={slides} />
    )
}