from re import S
from django.db import models
import uuid

from django.forms import IntegerField
from user.models import UserProfile
# Create your models here.

class Post(models.Model):
    post_id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    user=models.ForeignKey(UserProfile,on_delete=models.CASCADE,related_name='posts')
    title=models.TextField(blank=True)
    description=models.TextField(blank=True)
    image=models.ImageField(upload_to="uploads/",null=True,blank=True)
    file=models.FileField(upload_to="uploads/",null=True,blank=True)
    # like_count=models.PositiveIntegerField(default=0)
    created_on=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)


    def __str__(self):
        return self.user.username

    def __str__(self):
        return  f"{self.user.username}"  

class Comment(models.Model):
    user=models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    text=models.TextField(blank=True)
    created_on=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return  f"{self.user.username}-{self.text[:10]}"   



class Like(models.Model):
    class LikeChoices(models.TextChoices):
        Like='LI',"Like"
        Support='S',"Support"  
        CELEBRATE='C',"Celebrate"  
        Love='LO',"Love"  
               
    user=models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    post=models.ForeignKey(Post,on_delete=models.CASCADE)
    value=models.CharField(max_length=2,choices=LikeChoices.choices,default=LikeChoices.Like)
    created_on=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)


    def __str__(self):
        return  f"{self.user.username}-{self.value}"


