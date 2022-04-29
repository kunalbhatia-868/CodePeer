from django.shortcuts import get_object_or_404
import jwt
from backend.settings import SECRET_KEY
from django.db.models import Q
from .models import Relationship, UserProfile
from .serializers import RelationshipSerializer,UserProfileSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView
from django.http import JsonResponse
# Create your views here.


class UserProfileSignup(APIView):
    def post(self,request):
        serializer=UserProfileSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            print(serializer.data)
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class RelationshipListCreateView(APIView):
    def get(self,request):      # seeing all the current firends
        token=request.META['HTTP_AUTHORIZATION'].split(" ")[1]
        user_email=jwt.decode(token,SECRET_KEY, algorithms=['HS256'])['user_id']
        user_id=UserProfile.objects.get(email=user_email).id
        
        relation_qs=Relationship.objects.filter(Q(sender=user_id) | Q(reciever=user_id) & Q(status=Relationship.RequestStatus.accepted))
        serializer=RelationshipSerializer(relation_qs,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    def put(self,request):      # accespting a sent request
        token=request.META['HTTP_AUTHORIZATION'].split(" ")[1]
        user_email=jwt.decode(token,SECRET_KEY, algorithms=['HS256'])['user_id']
        reciever_id=UserProfile.objects.get(email=user_email).id
        sender_id=request.data['sender']
        
        relation_qs=Relationship.objects.get((Q(sender=sender_id) & Q(reciever=reciever_id)))
        if relation_qs is not None:
            print(relation_qs)
            relation_qs.status=Relationship.RequestStatus.accepted
            relation_qs.save()
        
        return Response(status=status.HTTP_202_ACCEPTED)   
            
    def post(self,request):     #sending a request
        token=request.META['HTTP_AUTHORIZATION'].split(" ")[1]
        user_email=jwt.decode(token,SECRET_KEY, algorithms=['HS256'])['user_id']
        sender_id=UserProfile.objects.get(email=user_email).id
        
        request.data['sender']=sender_id
        reciever_id=request.data['reciever']
        
        relation_qs=Relationship.objects.filter((Q(sender=sender_id) & Q(reciever=reciever_id)) | (Q(sender=reciever_id) & Q(reciever=sender_id)))
        
        if relation_qs.exists():
            relation=relation_qs.first().status
            if(relation==Relationship.RequestStatus.sent):
                return JsonResponse(data={"message":"Request already sent"},status=status.HTTP_208_ALREADY_REPORTED)
            else:
                return JsonResponse(data={"message":"Already Friends"},status=status.HTTP_208_ALREADY_REPORTED)
        else:
            serializer=RelationshipSerializer(data=request.data)
        
            if serializer.is_valid():
                serializer.save()
                return Response(data=serializer.data,status=status.HTTP_201_CREATED)     
        

class RequestListView(APIView):     #see pending request
    def get(self,request):
        token=request.META['HTTP_AUTHORIZATION'].split(" ")[1]
        user_email=jwt.decode(token,SECRET_KEY, algorithms=['HS256'])['user_id']
        user_id=UserProfile.objects.get(email=user_email).id
        
        requests=Relationship.objects.filter((Q(status=Relationship.RequestStatus.sent) & Q(reciever=user_id)))
        print(requests)
        serializer=RelationshipSerializer(requests,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)

class RelationshipUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset=Relationship.objects.all()
    serializer_class=RelationshipSerializer
    
class UserDetailView(APIView):
    def get(self,request,pk):
        user=get_object_or_404(UserProfile,id=pk)
        serializer=UserProfileSerializer(user)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    
class SuggestFriend(APIView):       # not completed
    def get(self,id):     
       users=UserProfile.objects.all()
       serializer=UserProfileSerializer(users,many=True)
       return Response(data=serializer.data,status=status.HTTP_200_OK) 