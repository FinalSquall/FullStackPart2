const Course = ({course}) => {
    console.log('info',course)
  
    const sum = course.parts.map(p => p.exercises)
      .reduce((sum,exercises) => {
        return sum+=exercises
      },0)
  
    return (
      <>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total sum={sum}/>
      </>
    )
  }

const Content = ({ parts }) => 
<>
    {parts.map(p => <Part key={p.id} part={p}/>)}
</>

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

  export default Course