from django.db import models
import uuid
# Create your models here.

class Post(models.Model):
    post_id=models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    text=models.TextField(blank=True)
    image=models.ImageField(upload_to="uploads/",null=True,blank=True)
    file=models.FileField(upload_to="uploads/",null=True,blank=True)
    created_on=models.DateTimeField(auto_now_add=True)
    updated_on=models.DateTimeField(auto_now=True)

