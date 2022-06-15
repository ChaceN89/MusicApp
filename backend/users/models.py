from django.utils import timezone
from django.db import models

# Create your models here.

class User(models.Model):
    firstName = models.CharField(max_length=32)
    lastName = models.CharField(max_length=32)
    email = models.CharField(max_length=100, unique=True)
    userName = models.CharField(max_length=32, unique=True)
    password = models.CharField(max_length=16)
    date_joined = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.userName

class UserLibrary(models.Model):
    user = models.ManyToManyField(User)