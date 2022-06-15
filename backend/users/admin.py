from django.contrib import admin
from .models import User, UserLibrary

# Register your models here.
admin.site.register(User)
admin.site.register(UserLibrary)