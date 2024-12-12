import React, { useState } from 'react';

const MapContainerComponent = () => {
    // Using useState to set initial state
    const [location, setLocation] = useState(null);

    return (
        <div>
            <h1>Map Container</h1>
            {/* Render something based on location state */}
        </div>
    );
};

export default MapContainerComponent;
