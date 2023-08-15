import Link from 'next/link'
const CoursesProps = ({ courses }) => {
  return (
    <div className="courses">
      {courses?.map((course) => (
        <div key={course.id} className="card">
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.description}</p>
          <Link href={course.link} className="btn" target="_blank">Go to Course</Link>
        </div>
      ))}
    </div>
  )
}

export default CoursesProps