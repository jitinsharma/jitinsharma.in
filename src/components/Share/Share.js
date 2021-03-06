import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)
import {
    TwitterShareButton,
    RedditShareButton,
} from 'react-share';

import './Share.scss';

const Share = ({ socialConfig, tags }) => {
    return (
        <div className="post-social">
            <span>Share: </span>
            <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
                <span className="icon">
                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                </span>
            </TwitterShareButton>
            <a className="button is-outlined is-rounded linkedin"
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${socialConfig.config.url}&title=${socialConfig.config.title}&source=LinkedIn`}
                target="_blank" rel="noopener noreferrer">
                <span className="icon">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </span>
            </a >
            <RedditShareButton url={socialConfig.config.url} className="button is-outlined is-rounded reddit" title={socialConfig.config.title} >
                <span className="icon">
                    <FontAwesomeIcon icon={['fab', 'reddit-alien']} />
                </span>
            </RedditShareButton>
        </div>
    );
}

Share.propTypes = {
    socialConfig: PropTypes.shape({
        twitterHandle: PropTypes.string.isRequired,
        config: PropTypes.shape({
            url: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }),
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
    tags: [],
};

export default Share;