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

### Instructions to Run the App:
### 1. Install Node.js
### 2. If the node_modules directory does not exist, then install the required
###    packages via the following command:
###     install npm
###    The result of this command should be a new directory titled
###     node_modules
###    which contains all the required directories and files (as specified in
###    in the package.json file).
### 3. A Cron job should output data files every

### Dependencies:
### Required modules for this application (express and http) are specified in
###   the package.json file.
### Other dependencies for this application are specified in the CSS code.
###   These dependencies (categorized by type) are:
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

### Parsing Data Files:
### The data files are parsed

### Hourly Refresh:
### For the hourly refresh of the data to work, the Cron job producing the
###    overallDEAC.csv and perChassis.csv
### data files MUST place these files in this directory.
### Each Cron job output should overwrite the previously existing file with
### the same name.
### NOTE: If the file name(s) is altered in the Cron job output, the file name
### must be consistent with the file name(s) in the javascript code.

### On Heroku (a cloud platform that supports Node.js apps):
### The Procfile is required (as it contains the command that should be executed to start the app).
### On other servers:
###   The Procfile may not be required. If the data
###   If the Cron job is
