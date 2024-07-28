/* eslint-disable react/prop-types */
const Total = ({sum}) => {
    //const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
    const total = sum.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0);
    return (
      <p>Number of exercises {total}</p>
    );
  }

  export default Total;