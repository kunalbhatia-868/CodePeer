from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView 
from social.models import Like, Post,Comment
from rest_framework.response import Response
from social.serializers import CommentSerializer, LikeSerializer, PostSerializer
from rest_framework import status
# Create your views here.


class PostListCreateView(ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer


class CommentsListCreateView(APIView):
    def get(self,request,pk):
        comment_list=Comment.objects.filter(post__post_id=pk)
        serializer=CommentSerializer(comment_list,many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)
    
    
    def post(self,request,pk):
        request.data['post']=pk
        serializer=CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
        
class LikeCreateView(APIView):
    def post(self,request,pk):
        likeQuerySet=Like.objects.filter(user=request.data['user']).filter(post=pk)
        if(likeQuerySet.exists()):
            likeQuerySet.delete()
            return Response(status=status.HTTP_201_CREATED)
        
        request.data['post']=pk
        serializer=LikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST) 