from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)

    # jsut a basic set up idea not sure where to put this file for now as of inital backedn commit