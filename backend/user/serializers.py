from rest_framework import serializers
from .models import UserProfile,Relationship

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile
        fields=['id','first_name','last_name','username','email','bio','github_id']
        
        
class RelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model=Relationship
        fields="__all__"        