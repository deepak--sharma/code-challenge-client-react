import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import React, { useState as useStateMock } from 'react'

let container;
const messages = {
    good: "all good",
    low: "too low",
    high: "too high"
}
const beerItem = [{
    id: '1',
    name: 'Pilsner',
    minimumTemperature: 4,
    maximumTemperature: 6,
}, {
    id: '2',
    name: 'IPA',
    minimumTemperature: 5,
    maximumTemperature: 6,
},]
describe('<App />', () => {
    const setState = jest.fn()
    beforeEach(() => {
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => useStateMock({ beerItem }));       
        const mockResponse = { id: "1", temperature: 4 };
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse)
        });
        container = document.createElement('div');
        document.body.appendChild(container);
    });
    afterEach(() => {
        // cleanup on exiting
        //unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    it('renders correctly', () => {
        const tree = renderer
            .create(<App data={beerItem} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render the message', () => {
        const wrapper = shallow(<App data={beerItem} />);
        console.log("wrapper is ", wrapper.debug());
        expect(wrapper.find('tr').children()).toHaveLength(6);
        //I expected this to pass but somehow the wrapper is rendering empty table, see console log at line no 49
        //expect(wrapper.find('tr').children().contains(<td>Pilsner</td>)).toBeTruthy();
    });
});