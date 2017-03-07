import React from 'react';
import classnames from 'classnames';
import categories from '../utils/categories';

const Notification = ({
    header,
    body,
    category,
    onRemove
}) => (
    <div
        className={ classnames({
            notification: true,
            'notification--info': category === categories.INFO,
            'notification--warning': category === categories.WARNING,
            'notification--error': category === categories.ERROR
        }) }
    >
        <i
            className={ classnames({
                fa: true,
                'notification-icon': true,
                'fa-info-circle': category === categories.INFO,
                'fa-exclamation-triangle': category === categories.WARNING,
                'fa-times': category === categories.ERROR
            }) }
        />
        <div className="notification-content">
            <div className="notification-content__header">{ header }</div>
            { body && (<div className="notification-content__body">{ body }</div>) }
        </div>
        <i
            className="fa fa-times notification-remove-icon"
            onClick={ onRemove }
        />
    </div>
);

Notification.propTypes = {
    header: React.PropTypes.string.isRequired,
    body: React.PropTypes.string,
    category: React.PropTypes.string.isRequired,
    onRemove: React.PropTypes.func.isRequired
};

export default Notification;
