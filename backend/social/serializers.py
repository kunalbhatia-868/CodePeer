from dataclasses import field
from rest_framework import serializers
from .models import Post,Comment,Like
from user.serializers import UserProfileSerializer


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model=Post
        fields='__all__'
        
    def to_representation(self, instance):
        rep= super().to_representation(instance)
        rep['user']=UserProfileSerializer(instance.user).data
        return rep
        

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Comment
        fields="__all__"    
        
        
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model=Like
        fields="__all__"        