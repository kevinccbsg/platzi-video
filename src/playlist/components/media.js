import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

const Media = (props) => (
  <div className="Media" onClick={props.openModal(props)}>
    <div className="Media-cover">
      <img
        src={props.cover}
        alt=""
        width={260}
        height={160}
        className="Media-image"
      />
      <h3 className="Media-title">{props.title}</h3>
      <p className="Media-author">{props.author}</p>
    </div>
  </div>
);

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
  openModal: PropTypes.func,
}

Media.defaultProps = {
  openModal: () => 0,
};

export default Media;

