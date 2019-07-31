import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as dark } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const LikeDark = () => {
    return (
        <FontAwesomeIcon icon={dark} size="2x" />
    );
}

export const LikeWhite = () => {
    return (
        <FontAwesomeIcon icon={faHeart} size="2x" />
    );
}
