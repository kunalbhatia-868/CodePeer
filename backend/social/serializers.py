from dataclasses import field
from rest_framework import serializers
from .models import Post,Comment,Like
from user.serializers import UserProfileSerializer


class PostSerializer(serializers.ModelSerializer):
    user=UserProfileSerializer()
    class Meta:
        model=Post
        fields='__all__'
        

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields="__all__"    
        
        
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Like
        fields="__all__"        