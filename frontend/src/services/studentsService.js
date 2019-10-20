// const URL = process.env.REACT_APP_API_URL;
const URL = "http://api.students.banvuong.com";
// const URL = "https://www.hatchways.io/api/assessment/students";
export async function getStudents() {
  const data = await fetch(URL);
  const { students } = await data.json();
  return students;
}
