import React, { useState } from 'react';
import constants  from '../../constants';
import PropTypes from "prop-types";

export default ( { requestLink, isCached = false, delay='ms' } ) => {
    return (<div>
    <div>{`${constants.REQUESTING}: ${requestLink}`}</div>
    <div>{`${constants.REQUESTCACHED}: ${isCached}`}</div>
    <div>{`${constants.TIMETAKEN}: ${delay}`}</div>
</div>)
}