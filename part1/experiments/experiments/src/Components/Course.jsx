const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
}

const Part = (props) => {
    return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
    );
}

const Content = ({ parts }) => {
    return (
    <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </div>
    );
}

const Course = ({ course }) => {
  return (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
    </div>
    );
}


export default Course;