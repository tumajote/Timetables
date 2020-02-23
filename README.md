## Eficode timetable info screen

This app displays timetables from my home to Eficode headquarters. The info screen gives the actual departure, duration and arrival times of the trip including the walking time. I decided to have a view where you can quickly see the next departures and arrival times with a glance because I would use such an info board more as a reminder tool than for planning for future. Consequently, I made a design choice to show only the next departures for each mode of transportation. I made separate columns for metro and bus departures because metro is always the fastest method of transportation but the bus stop is closer so there is less walking which could make a difference in some cases. The app also displays a timetable for bicycle as that is my main mode of transportation. The app updates the timetable every minute. 

### Web version 

There is an instance of the info screen running in Heroku :

[Timetable info screen]( https://timetables-to-eficode.herokuapp.com/)

The info screen is deployed as a Docker image with the Heroku Container Registry 

### Local deployment with Docker

Clone the repo ``` git clone https://github.com/tumajote/timetables.git ```

Navigate to the repo and build the image ``` docker build -t timetableapp .```

Run the container ``` docker run -p 3000:3000 timetableapp```

Open the app in browser http://localhost:3000

If you wish to change the port the app is running in change the first parameter in the run command to the desired port for example 
``` docker run -p 3001:3000 timetableapp``` runs the app in the port 3001 


### Commit history

Unfortunately I messed up the original repo and had to migrate to a new one. Consequently, the commit history does not reflect the actual progression of this project.


 
