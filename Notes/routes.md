# Endpoints/Routes

### Table of Contents

- [Information](#information)
- [Test Routes](#test-routes)
- [User Routes](#user-routes)
- [Song Routes](#song-routes)
- [Saved Song Routes](#saved-song-routes)
- [Library Routes](#library-routes)
- [Playlist Routes](#playlist-routes)
- [Search Routes](#search-routes)
- [Recommended Playlist Routes](#recommended-playlist-routes)
- [Route Template](#route-template)

---

## ***Information*** 
    Login information will go here, for test account and other useful public information

    Also, beside the name of each route we can put - unfinished or don't plan to finish if we want

    Under Authorization it could be Bearer Token using JWT fort example

    Return could look something like this 
<details><summary>Return could look something like this </summary> 

    -Returns: Status 200 OK  // account created, info returned
		{
		"_id": "622c08211c919e1ccb135709",
		"username": "chacen",
		"userPosts": [],
		"savedPosts": [],
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmMwODIxMWM5MTllMWNjYjEzNTcwOSIsImlhdCI6MTY0NzA1MjgzMywiZXhwIjoxNjQ5NjQ0ODMzfQ.o5-NS5YS7moH0jzV9Wg3Vce2kBMB25fgCbruGgfZ9rc"
		}
	Status 400 Bad Request
  		{"message": "User Already Exists","stack": "....."}			
  	or	{"message": "Please Add All Fields", "stack": "....."}			
  	or	{"message": "Could Not Create User - Invalid Entry", "stack": "....."}

</details>

logout doens't need a route its just removing the authporization token from cookies of the browser




## ***Test Routes*** 

<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/user/...*
</font>
<font color="lightblue">

<!-- Test Route -->
<details><summary>Test Route </summary> 
<br>

#### Test backend - public 
    GET .../api/test
	-Fields: none
	-Authorization: No
	-Returns: {"message": "Welcome"}
    -Other info: N/A
<br>
</details>

<!-- Test Route Timed -->
<details><summary>Timed Test Route </summary> 
<br>

#### Test backend with timed response - public 
    GET .../api/test/:delay
	-Fields: 
	-Authorization: No
	-Returns: {"message": "Delayed Hello of  {delay} seconds"}
    -Other info: dleay is the number of seconds for backend to sleep before returning
<br>
</details>



 </font>









---

## ***User Routes*** 
<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/user/...*
</font>
<font color="lightblue">

<!-- Get Current User -->
<details><summary>Get Current User </summary> 
<br>

#### Get current user info - Private 
    GET .../api/user/me
	-Fields: none
	-Authorization: Yes
	-Returns: TBD
    -Other info: N/A
<br>
</details>

<!-- Register -->
<details><summary>Register</summary>
<br>

#### Create Account/Register for an Account - Public
	POST/GET/PUT/DELETE .../api/users
	-Fields: username, password, email, fname, lname, 
	-Authorization: none
	-Returns: TBD
    -Other info: N/A
<br>
</details>


<!-- Login -->
<details><summary>Login </summary>
<br>

#### Login to an account - Public
	POST .../api/users/login
	-Fields: username, password 
	-Authorization: none
	-Returns: TBD
    -Other info: N/A
<br>
</details>



 </font>
 






<br>

---


## ***Song Routes*** 
<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/songs/...* </font>
<font color="lightblue">

<!-- Route Template -->
<details><summary>Route Template </summary>
<br>

#### Description of the Route - Public/Private
	POST/GET/PUT/DELETE .../api/.../:id
	-Fields: ... lname
	-Authorization: ...
	-Returns: TBD
    -Other info: description of parameters in in actual route (/:id) or in fields (lname)
<br>
</details>


 </font>







<br>

---

## ***Saved Song routes*** 
<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/savedSongs/...* </font>
<font color="lightblue">

Add Route template Here


 </font>





<br>

---


## ***Library Routes*** 
<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/library/...* </font>
<font color="lightblue">

Add Route template Here


 </font>








<br>

---


## ***Playlist Routes***
<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/playlists/...* </font>
<font color="lightblue">

Add Route template Here


 </font>







<br>

---

## ***Recommended Playlist Routes***
<font color="green">&nbsp;&nbsp;&nbsp;&nbsp; *api/recommendedPlaylists/...* </font>
<font color="lightblue">

Add Route template Here


 </font>





<br><br><br><br>

---

## ***Route Template*** 

<!-- Route Template -->
<details><summary> simple route name </summary>
<br>

#### Description of the Route - Public/Private
	POST/GET/PUT/DELETE .../api/.../:id
	-Fields: ... lname
	-Authorization: ...
	-Returns: TBD
    -Other info: description of parameters in in actual route (/:id) or in fields (lname)
<br>
</details>