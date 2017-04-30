# CSC-331-631
# README.md

### Name of app in Heroku:
### deacclustersystemmonitor

### Team Members:
### Riana Freedman, Kathryn Rouse, Kanika Gandhi, Alexis Aguirre, Hyun Ho Lee

### Brief Description:
### This web application will serve as a system monitor for the WFU DEAC Cluster.
### As such, this web application will provide information about the
### current status of the DEAC Cluster (including overall Cluster information,
### Cluster health information, node allocation information,
### and information specific to each chassis). General information will be
### displayed for the aforementioned categories with options to expand/minimize
### more detailed information and to filter information specific to chassis.
### The data displayed will be refreshed on an hourly basis.

################################################################################

### USER MANUAL
### Author: Riana Freedman

###----------------------------------------------------------------------------
###----------------------------------------------------------------------------

### The following is an abbreviated manual to assist developers in running
###   this web application and understanding requirements of the application.
###   Note that all code (both client- and server-side) is extensively
###   commented.

###----------------------------------------------------------------------------
###----------------------------------------------------------------------------

### INSTRUCTIONS TO RUN THE APP:
### 1. Install Node.js on the server that the app will run on.
### 2. Place all files in the specified GitHub repository in a designated
###     path on the server.
### 3. If the node_modules directory does not exist, then install the required
###    packages via the following command (in the terminal):
###       npm install
###    The result of this command should be a new directory titled
###       node_modules
###    which contains all the required directories and files (as specified in
###    in the package.json file).
### 4. A Cron job should output data files every hour to the specified
###    directory. If these files are not accessible in the same directory as
###    the index.html and server.js files, the data paths will need to be
###    altered in response to a GET request in order to access the data files
###    dynamically.
### 5. To run the application on a server, the following command should be run
###    in the terminal:
###       node server.js
###    If all is set up correctly, then the application should be accessible
###    and functioning on the web when the appropriate URL is navigated to.

###----------------------------------------------------------------------------

### THE FILES:
### Files pertaining to this application (which is a single page) include:
###   index.html (the HTML, CSS, and Javascript aspects that define the
###      appearance and functionality of the application; client-side)
###   server.js (the server-side Javascript code)
###   overallDEAC.csv (one of two data files output by Cron job)
###   perChassis.csv (one of two data files output by Cron job)
###   package.json (file containing the required module dependencies)
###   Procfile (needed to specify the command to initialize the app on Heroku)
###   README.md (instructional and informational material regarding the app)
###   .gitignore (files/directories to ignore when pushing to GitHub)
###   contents of the /node_modules directory (contain the module dependencies
###     installed via npm install command(s))

###----------------------------------------------------------------------------

### DEPENDENCIES:
### Required modules for this application (express and http) are specified in
###   the package.json file.
### Other dependencies for this application are specified in the CSS code.
###   The dependencies utilized in this application are linked to in the CSS
###   code. There are NO requirements to be downloaded.
###   These dependencies (categorized by type (and included in the code)) are:
###     stylesheet:
###       http://www.deac.wfu.edu/assets/css/main.css
###       https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
###     icon:
###       http://www.deac.wfu.edu/images/favicon.png
###     script:
###       https://www.gstatic.com/charts/loader.js
###       http://www.deac.wfu.edu/assets/js/jquery.min.js
###       http://www.deac.wfu.edu/assets/js/jquery.dropotron.min.js
###       http://www.deac.wfu.edu/assets/js/skel.min.js
###       http://www.deac.wfu.edu/assets/js/skel-viewport.min.js
###       http://www.deac.wfu.edu/assets/js/util.js
###       http://www.deac.wfu.edu/assets/js/main.js
### In the event that a dependency fails, please verify that the above links
###   are currently active on the web.

###----------------------------------------------------------------------------

### PARSING DATA FILES:
### FILES:
### The data files are comma-separated values (CSV) files output by the Cron
###   job querying the Cluster.
### The first row of each of these files is a unique timestamp identifying the
###   date and time when the file was produced (ie. when the data was last
###   updated).
### The second row of each of these files contains the column headers.
### The remaining row(s) of the files contain(s) the data.
### PARSING:
### To access each data file, a XMLHttpRequest is made to open the file via a
###   GET operation on the file name. To be successful, the file(s) to be opened
###   in this manner should be located in the same directory as the index.html
###   and server.js files. A function is then defined to check the status of
###   the file on state change. If the state of the file indicates that it is
###   ready to be read, then the contents of the file are stored in a variable.
### The file contents are initially stored as one string
###   (columns are comma-delimited; rows are newline character-delimited).
###   Thus, the file contents are split into an array of strings via a
###   split("\n") operation on the variable initially storing the file contents.
###   The results of the split operation are stored in a new variable.
### The first entry in the array of rows is the timestamp, which is addressed
###   as a single string (comma-separation is disregarded) upon verifying if
###   the data was updated.
### Subsequently, the remaining rows are addressed individually (via a loop).
###   First, the row number is used to determine if a header row is being
###     addressed or if the row is content to be appended to the table.
###   Second, each row is split into an array of column entries via a split(",")
###     operation on the row. The results are stored in a new variable to be
###     appended as individual elements to the row in the table.
### For tables with fixed columns whose data is derived from the two files
###   output by the Cron job, parsing the data in the described manner enables
###   checking the column header associated with each data item in order to
###   calculate and collect the information required for the derived tables.
###   This derived data is then encapsulated in a JSON object that is used
###   to dynamically populate the derived tables when the data is initialized
###   or refreshed.

###----------------------------------------------------------------------------

### HOURLY REFRESH:
### For the hourly refresh of the data to work, the Cron job producing the
###    overallDEAC.csv and perChassis.csv
### data files MUST place these files in this directory.
### Each Cron job output should overwrite the previously existing file with
### the same name.
### NOTE: If the file name(s) is altered in the Cron job output, the file name
### must be consistent with the file name(s) in the javascript code.

###----------------------------------------------------------------------------

### SERVERS:
### On Heroku (a cloud platform that supports Node.js apps):
###   The Procfile is required (as it contains the command that should be
###     executed to start the app).
###   Only static data files are utilized by the application (given that the
###     Cron job does not access the Heroku server).
### On other servers:
###   The Procfile may not be required.
###   When the Cron job outputs data every hour, it should place the files in
###     the directory containing the index.html and server.js files.
