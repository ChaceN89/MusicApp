# **MusicApp**
SoundCloud Clone with additional features


## **Project Set Up**
    git clone <repo>
    The frontend and backend folders are seperate
    (might create a script to run both at same time from root folder but will set that up later)


## **Frontend** - React

    You probably have to install nodejs to run a react project
    Navigate to frontend folder in terminal

    inside fontend folder 
    to install all the dependancies 
    - npm install 

    the packa.json file contains a list of dependancies used and is automatically updated

    To run frontend
    - npm run start

    to install new dependancies while in frontend folder use  
    - npm i <module> 

    See FrontendNotes.txt for more on the front end

    You should be able to work on frontend while it is running and saving will automatically refresh the browser page



## **Backend** - Django
   
    You have to install python to run a django project
    Navigate to backend folder in terminal

    Set up a virtual Enviroment (with name venv)
    - py -m venv venv
    or
    - python venv venv

    this will create a folder called venv in the backend 

    **** The virtual enviroment needs to be activated in terminal by running  (if it doens't work see next step)****
    - venv/Scripts/activate

    You may need to run command 
    -  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
      
    You are now running a virtual enviroment whcih contains the dependacies and the command should look like this
    (venv) PS C:\Users\chace\ ....

    There is a requierments.txt file which contains a list of dependancies used
    to install all depandancies run
    - python -m pip install -r requirements.txt

    to add new dependancies make sure your virtual enviroment is active and use
    pip install <module name>

    unlike Node/react projects the file containing the list of dependancies isn't automatically updated

    to update the requirements.txt file with new dependancies run
    - python -m pip freeze > requirements.txt

    ***After installing a libray/dependancy always run the above command***

    You should be able to run the backend with
    - python manage.py runserver