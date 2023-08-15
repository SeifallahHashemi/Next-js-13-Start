'use client'

import { useState } from "react"

const SearchCourses = ({ getSearchResults }) => {
    const [query , setQuery] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const res = await fetch(`/api/courses/search?query=${query}`);
        const courses = await res.json();
        getSearchResults(courses);
    }
  return (
    <form onSubmit={handleSubmit} className='search-form text-black'>
      <input
        type='text'
        className='search-input'
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  )
}

export default SearchCourses