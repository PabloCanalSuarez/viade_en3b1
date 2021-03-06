import RouteDetailsCard from "./RouteDetailsCard";
import Route from '../../entities/Route';
import TrackPoint from '../../entities/TrackPoint';

var route1 = new Route("Route1", "Description 1", [new TrackPoint(1,1), new TrackPoint(2,1)], null, null, null);

test('Define RouteDetailsCard', () => {
    expect(RouteDetailsCard).toBeDefined();
});

test('Renders correctly', () => {
    const wrapper = render(<RouteDetailsCard.WrappedComponent route={route1} />);
    expect(wrapper).toMatchSnapshot();
});

test('Renders null', () => {
    const wrapper = render(<RouteDetailsCard.WrappedComponent route={null} />);
    expect(wrapper).toMatchSnapshot();
});