import React, { useState } from 'react';
import constants  from '../../constants';
import PropTypes from "prop-types";

export default ( { requestLink, isCached = false, delay=null, loading } ) => {
    return (<div>
    <div>{`${constants.REQUESTING}: ${loading? 'fetching....':requestLink}`}</div>
    {isCached && <div>{`${constants.REQUESTCACHED}: ${loading? 'fetching....':isCached}`}</div>}
    {delay && <div>{`${constants.TIMETAKEN}: ${loading? 'fetching....':delay}`}</div>}
</div>)
}