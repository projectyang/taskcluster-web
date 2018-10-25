import { hot } from 'react-hot-loader';
import React, { lazy, Component } from 'react';
import { Switch } from 'react-router-dom';
import RouteWithProps from '../../components/RouteWithProps';

const ViewProvisioners = lazy(() =>
  import(/* webpackChunkName: 'Provisioners.ViewProvisioners' */ './ViewProvisioners')
);
const ViewWorkerTypes = lazy(() =>
  import(/* webpackChunkName: 'Provisioners.ViewWorkerTypes' */ './ViewWorkerTypes')
);
const ViewWorker = lazy(() =>
  import(/* webpackChunkName: 'Provisioners.ViewWorker' */ './ViewWorker')
);
const ViewWorkers = lazy(() =>
  import(/* webpackChunkName: 'Provisioners.ViewWorkers' */ './ViewWorkers')
);

@hot(module)
export default class Provisioners extends Component {
  render() {
    const {
      match: { path },
      ...props
    } = this.props;

    return (
      <Switch>
        <RouteWithProps
          path={`${path}/:provisionerId/worker-types/:workerType/workers/:workerGroup/:workerId`}
          {...props}
          component={ViewWorker}
        />
        <RouteWithProps
          path={`${path}/:provisionerId/worker-types/:workerType`}
          {...props}
          component={ViewWorkers}
        />
        <RouteWithProps
          path={`${path}/:provisionerId`}
          {...props}
          component={ViewWorkerTypes}
        />
        <RouteWithProps
          path={path}
          {...props}
          component={ViewProvisioners}
          description="List worker-types for provisioners and see relevant information.
      List workers for a worker-type and see relevant information. Drill down into a
      specific worker and perform actions against it or see recent tasks it has claimed."
        />
      </Switch>
    );
  }
}
