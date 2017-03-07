import React from 'react';
import _ from 'lodash';
import { expect } from 'chai';
import { mount } from 'enzyme';
import categories from '../../../challenge/client/utils/categories';
import sinon from 'sinon';

import Notification from '../../../challenge/client/components/Notification';

describe('Notification', () => {
    it('should render', () => {
        mount(
            <Notification
                header="header"
                body="body"
                category={ categories.INFO }
                onRemove={ _.identity }
            />
        );
    });

    it('should contain relevant data', () => {
        const wrapper = mount(
            <Notification
                header="header"
                body="body"
                category={ categories.INFO }
                onRemove={ _.identity }
            />
        );

        expect(wrapper.find('.notification-content__header').text()).to.eql('header');
        expect(wrapper.find('.notification-content__body').text()).to.eql('body');
    });

    it('should have proper schema', () => {
        const wrapper = mount(
            <Notification
                header="header"
                body="body"
                category={ categories.WARNING }
                onRemove={ _.identity }
            />
        );

        expect(wrapper.hasClass('notification--warning')).to.eql(true);
        expect(wrapper.find('.notification-icon').hasClass('fa-exclamation-triangle')).to.eql(true);
    });

    it('should handle click', () => {
        const onClick = sinon.spy();
        const wrapper = mount(
            <Notification
                header="header"
                body="body"
                category={ categories.WARNING }
                onRemove={ onClick }
            />
        );

        expect(onClick.called).to.eql(false);
        wrapper.find('.notification-remove-icon').simulate('click');
        expect(onClick.called).to.eql(true);
    });

    it('should not display an element for body value if it is empty', () => {
        const wrapper = mount(
            <Notification
                header="header"
                body=""
                category={ categories.WARNING }
                onRemove={ _.identity }
            />
        );
        expect(wrapper.find('.notification-content__body')).to.have.length(0);
    });
});
