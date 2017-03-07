import React from 'react';
import { connect } from 'react-redux';
import { selectors } from '../reducers';
import { actions } from '../actions';
import Notification from './Notification';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Notifications = ({
    notifications,
    removeNotification
}) => (
    <div className="notifications">
        <ReactCSSTransitionGroup
            transitionName="notifications"
            transitionEnterTimeout={ 500 }
            transitionLeaveTimeout={ 500 }
        >{
            notifications.map(({
                id,
                header,
                body,
                category
            }) => (
                <Notification
                    key={ `notification-${ id }` }
                    header={ header }
                    body={ body }
                    category={ category }
                    onRemove={ () => removeNotification(id) }
                />
            ))
        }</ReactCSSTransitionGroup>
    </div>
);

Notifications.propTypes = {
    notifications: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            header: React.PropTypes.string.isRequired,
            body: React.PropTypes.string,
            category: React.PropTypes.string.isRequired,
            id: React.PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

const mapStateToProps = state => ({
    notifications: selectors.getNotifications(state)
});

export default connect(
    mapStateToProps,
    { removeNotification: actions.removeNotification }
)(Notifications);
