// const URL = process.env.REACT_APP_API_URL;
const URL = "http://api.students.banvuong.com";
console.log("Url", URL);
export async function getStudents() {
  const data = await fetch(URL);
  const { students } = await data.json();
  console.log("students", students);
  return students;
}
