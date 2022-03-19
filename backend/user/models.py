from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from user.managers import UserProfileManager
# Create your models here.
class LowercaseEmailField(models.EmailField):
    """
    Override EmailField to convert emails to lowercase before saving.
    """
    def to_python(self, value):
        """
        Convert email to lowercase.
        """
        value = super(LowercaseEmailField, self).to_python(value)
        # Value can be None so check that it's a string before lowercasing.
        if isinstance(value, str):
            return value.lower()
        return value
    

class UserProfile(AbstractUser):
    username=models.CharField(_('username'),max_length=200,default='guest_user')
    email=LowercaseEmailField(_('email address'),unique=True)
    bio=models.TextField(max_length=1000)
    github_id=models.CharField(max_length=50,blank=True)
    image=models.ImageField(upload_to='uploads/')
    created_on=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)
    
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
    
    objects=UserProfileManager()
    
    def __str__(self):
        return self.email