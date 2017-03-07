import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, getFormValues } from 'redux-form';
import SelectCategory from './SelectCategory';
import categories from './../utils/categories';
import { actions } from '../actions';
import capitalize from './../utils/capitalize';

let Form = ({
    category,
    submit,
    handleSubmit
}) => (
    <form className="well-lg well" onSubmit={ handleSubmit(submit) }>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
                <label htmlFor="header">Header</label>
                <Field
                    name="header"
                    id="header"
                    type="text"
                    className="form-control"
                    component="input"
                    placeholder={ capitalize(category) }
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-8 col-xs-12">
                <label htmlFor="body">Body</label>
                <Field
                    name="body"
                    id="body"
                    className="form-control"
                    component="textarea"
                    rows="4"
                />
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2 col-md-3 col-xs-4">
                <label htmlFor="category">Category</label>
                <Field
                    name="category"
                    id="category"
                    component={ SelectCategory }
                />
            </div>
        </div>
        <div className="text-center row">
            <input
                type="submit"
                className="btn btn-default btn-lg"
                value="Add a notification"
            />
        </div>
    </form>
);

Form.propTypes = {
    category: React.PropTypes.string.isRequired,
    submit: React.PropTypes.func.isRequired
};

Form = connect(
    state => ({
        category: getFormValues('notification')(state).category
    }),
    { addNotification: actions.addNotificationSaga },
    (stateProps, { addNotification }, ownProps) => ({
        ...ownProps,
        ...stateProps,
        submit: values => {
            addNotification(values);
            ownProps.reset();
        }
    })
)(Form);

Form = reduxForm({
    form: 'notification',
    initialValues: {
        header: '',
        body: '',
        category: categories.INFO
    }
})(Form);

export default Form;
