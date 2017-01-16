/* @flow */
import React from 'react';

type ComponentsProps = {
  name: string,
}

type AppProps = {
  name?: string,
}

const StatelessComponent = ({ name }: ComponentsProps) => (
  <div>{name}</div>
);

class ClassComponent extends React.Component {
  props: ComponentsProps

  render() {
    const { name } = this.props;

    return (<div>{name}</div>)
  }
}

class PureClassComponent extends React.PureComponent {
  props: ComponentsProps

  render() {
    const { name } = this.props;

    return (<div>{name}</div>)
  }
}

const App = ({ name }: AppProps) =>  {
  return (
    <div className="App">
      <StatelessComponent name={name} />
      <ClassComponent name={name} />
      <PureClassComponent name={name} />
    </div>
  );
}
