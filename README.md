

//AUTH 
app.use("/auth", authRoutes);

POST /register : {
	    "username" ,
    "password" ,
    "email" 
}

POST "/login" : {
	username , password 
}
===============================

// postRoutes
app.use("/post", postRoutes);

GET "/"

GET "/:topic" 
{
	"topicName"
}


POST "/create" : {
	{ "title","content","topic" }
}
===================================
//userRoutes
app.use("/user", userRoutes);

"/:username" 

"/:username/post" 

"/getById/:id"

//topicRoutes
app.use("/topic", topicRoutes)

=================================

//commentRoutes
app.use("/comment", commentRouters)
 + /create : {
 	postId , content
 }


+ /:postId 