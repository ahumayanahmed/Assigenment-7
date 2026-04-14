import Timelinecontext from '@/context/timeline.context';
import React from 'react';

const Provider = ({children}) => {
    return (
        <Timelinecontext>
{ children}
        </Timelinecontext>
    );
};

export default Provider;