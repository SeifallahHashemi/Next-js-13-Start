'use client'
import React, { useEffect, useState } from 'react'
import Courses from './components/courses'
import CoursesProps from './components/courses-props'
import LoadingSpinner from './components/loading-spinner'
import SearchCourses from './components/search-courses'

export const metadata = {
  title: 'Next js 13 - tutorial',
  description: 'next js 13 crash course - from scratch',
  keyword: 'next.js, web development, javascript, css, html, react, next js 13'
}

const page = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses');
      const data = await response.json();
      
      setCourses(data);
      setIsLoading(false);
    }
    fetchCourses().catch(error => {
      console.log(error.message);
    })
  }, [])
  if (isLoading) {
    <LoadingSpinner />
  }
  return (
    <div className='font-bold text-xl'>
      <h1>welcome to Home Page</h1>
      {/* <Courses /> */}
      <SearchCourses getSearchResults={(results) => setCourses(results)} />
      <CoursesProps courses={courses}/>
    </div>
  )
}

export default page