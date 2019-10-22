# Descriptions:
The webpage will displays a list of students with each student has their own information. The students can be filtered both by name and by tags (which can be added to individual student through their expanded view). There is a backend API to perform CRUD operations, however, the client UI is not yet implemented. 

Live demo at: http://students.banvuong.com

# Details:
### Backend:
**Technologies Used:** NodeJs, ExpressJs, MongoDB

1) Implemented REST API CRUD endpoints to interface with the database MongoDB
2) Server side validation with Joi.
3) Followed MVC design patter and clean code practice

### Frontend
**Technologies Used**: Javascript/ReactJs, HTML5, CSSS3, Bootstrap 4

1) Consume data from the backend REST API.
2) Responsive/dynamic design.
3) Follow ReactJS components based approach for ease of code re-use.

### Deployment
Deploy both frontend and backend on Digital Ocean Droplet (Virtual Private Server - Ubuntu Linux). Use Nginx to serve the frontend, PM2 to serve the backend.



