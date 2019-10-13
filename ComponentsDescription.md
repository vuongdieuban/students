# Components Hierarchy:

                      App
                       |
                    Students
                  /    |      \
                /      |        \
              /        |          \
    ListStudents     SearchBar   SearchBar
        |            (Tags)      (Name)     
        |                               
    IndivStudent
        |
    DetailExpand
        |
    TagInput

# Components:
### Students:
Single source of truth for all the students data. 

Students data state lives here. This component alone is responsible for changing/updating the students data state.

Process all the logic including fetching students, handleSearchName, handleSearchTag, handleTagInputSubmit, getStudents (filtered students based on name and tag)

render: `SearchBar(Tags,Name)`, `ListStudent`

### SearchBar
Takes input from user and return it back to `Students` so `Students` can filter the list of students depends on user input.  

render: HTML input field

### ListStudents
Takes a list of current students from `Students` and map it out to display individual student `IndivStudent`. 

When `SearchBar` returns a filter query, the list of students will be changed by `Students`, which leads to `ListStudents` to re-render with different list of students 

render: list of `IndivStudent`

### IndivStudent:
Handle the details and display of individual student's information passed down by `ListStudents`.

Has its own state to track toggle. If toggle then render `DetailExpand`

render: Bootstrap ListGroup item(student info), `DetailExpand` if toggle is True

### DetailExpand
Take student.grades, student.tags passed down by `IndivStudent` and display them. 

render: grades list, tags list, `TagInput`

### TagInput
Take user input of new tag. On form submit signal, fires the callback `onNewTagSubmit` passed down from `Student`.

`Student` will take the new tag and append it to the student's tag array, then update the students state. State changed -> re-render -> new tag appear in student DetailExpand 

render: HTML form input