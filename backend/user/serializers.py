from django.db.models import Q
from rest_framework import serializers
from .models import UserProfile,Relationship

class UserProfileSerializer(serializers.ModelSerializer):
    password2=serializers.CharField(style={'input_type':'password'},write_only=True)
    class Meta:
        model=UserProfile
        fields=['id','first_name','password','password2','last_name','username','email','bio','github_id']
        extra_kwargs={
            'password':{'write_only':True}
        }
        
    def save(self, **kwargs):
        username=self.validated_data['username']   
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        first_name=self.validated_data['first_name']    
        last_name=self.validated_data['last_name']    
        bio=self.validated_data['bio']     
        email=self.validated_data['email']
        github_id=self.validated_data['github_id']
        
        if password2!=password:
            raise serializers.ValidationError("p1 and p2 not same")
        
        
        if (UserProfile.objects.filter(email=email).exists()):
            raise serializers.ValidationError("email already exists")
                
        account=UserProfile(email=email,username=username,first_name=first_name,last_name=last_name,bio=bio,github_id=github_id)
        account.set_password(password)
        account.save()
        return account
        
class RelationshipSerializer(serializers.ModelSerializer):
    class Meta:
        model=Relationship
        fields="__all__" 