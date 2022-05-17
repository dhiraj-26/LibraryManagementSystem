from msilib.schema import CustomAction
from django.contrib import admin
from .models import CustomUser

# Register your models here.
admin.site.register(CustomUser)