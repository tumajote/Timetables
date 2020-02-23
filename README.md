## Eficode timetable info screen

This app displays timetables from my home to Eficode headquarters. It shows the time I should leave to arrive at the time given in the same column. I decided to show only the next departures for each mode of transportation as a design choice. I would use such an info board more as a reminder tool than for planning for future. Consequently, I decided to have a view where you can quickly see the next departures and arrival times with a glance. The info screen gives the actual arrival, departure and duration of the trip including the walking time. I decided to have own columns for metro and bus because metro is always the fastest method of transportation but the bus stop is closer so there is less walking. The app also displays how long it would take to go with a bicycle as that is the method of transportation I mainly use. The app updates the timetable every minute. 

### Web version 

There is an instance of the info screen running in Heroku :

[Timetable info screen]( https://dashboard.heroku.com/apps/timetables-to-eficode)

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


 
