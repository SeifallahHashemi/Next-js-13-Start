import { NextResponse } from "next/server";
// import { v4 as uuidv4 } from "uuid";
import courses from "./data.json";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, link, level } = await request.json();
  const newCourse = {
    id: Math.random().toString(32),
    title,
    description,
    link,
    level,
  };
  courses.push(newCourse);
  return NextResponse.json(courses);
}
