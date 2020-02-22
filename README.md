## To Eficode timetable dashboard

This dashboard app displays timetables from my home to Eficode headquarters. It shows the leave, arrival and duration times for the next metro and bus. It also displays how long it would take to go with bicycle as that is the method of transportation I mainly use. The app updates the timetable every minute. 

### Web version 

There is an instance of the dashboard running in Heroku :

[Timetable dashboard]( https://timetables-to-eficode.herokuapp.com/)

The dashboard is deployed as a Docker image with the Heroku Container Registry 

### Local deployment with Docker

Clone the repo ``` git clone https://github.com/tumajote/timetables.git ```

Navigate to the repo and build the image ``` docker build -t timetableapp .```

Run the container ``` docker run -p 3000:3000 timetableapp```

Open the app in browser http://localhost:3000

If you wish to change the port the app is running in change the first parameter in the run command to the desired port for example 
``` docker run -p 3001:3000 timetableapp``` runs the app in the port 3001 




 
