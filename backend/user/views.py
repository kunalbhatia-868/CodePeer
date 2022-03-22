from django.db.models import Q
from .models import Relationship
from .serializers import RelationshipSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateDestroyAPIView
# Create your views here.

class RelationshipListCreateView(APIView):
    def get(self,request):
        user_id=request.data['user']
        relation_qs=Relationship.objects.filter(Q(sender=user_id) | Q(reciever=user_id))
        serializer=RelationshipSerializer(relation_qs,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
        
    def post(self,request):
        serializer=RelationshipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data,status=status.HTTP_201_CREATED)

class RelationshipUpdateDeleteView(RetrieveUpdateDestroyAPIView):
    queryset=Relationship.objects.all()
    serializer_class=RelationshipSerializer