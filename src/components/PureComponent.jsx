import React, { memo, useMemo } from "react";

const PureComponent = memo(({ counter }) => {
  function getFib(n) {
    if (n == 0 || n == 1) {
      console.log("fib called");
      return n;
    }
    return getFib(n - 1) + getFib(n - 2);
  }

  const memoizedFib = useMemo(() => getFib(counter), [counter]);

  console.log("child");
  return (
    <>
      <h3>{memoizedFib}</h3>
      <h3>Counter: {counter}</h3>
    </>
  );
});

/*
class PureComponent extends React.PureComponent {
  constructor() {
    super();
  }

  render() {
    const { counter } = this.props;
    console.log("child");
    return <h3>Counter: {counter}</h3>;
  }
}
*/

export default PureComponent;
