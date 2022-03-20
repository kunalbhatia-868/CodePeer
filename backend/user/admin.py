from django.contrib import admin
from user.models import Relationship, UserProfile

# Register your models here.

admin.site.register(UserProfile)
admin.site.register(Relationship)