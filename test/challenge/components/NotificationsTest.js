import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import categories from '../../../challenge/client/utils/categories';

import Notifications from '../../../challenge/client/components/Notifications';

describe('Notifications', () => {
    const mockStore = configureMockStore([]);

    it('should render', () => {
        const store = mockStore({
            notifications: []
        });
        const wrapper = mount(
            <Provider store={ store }>
                <Notifications />
            </Provider>
        );

        expect(wrapper.find('.notification')).to.have.length(0);
    });

    it('should render 3 notifications', () => {
        const store = mockStore({
            notifications: [
                { id: '1', header: '1', body: '', category: categories.INFO },
                { id: '2', header: '2', body: '', category: categories.INFO },
                { id: '3', header: '3', body: '', category: categories.INFO }
            ]
        });
        const wrapper = mount(
            <Provider store={ store }>
                <Notifications />
            </Provider>
        );

        expect(wrapper.find('.notification')).to.have.length(3);
    });
});
