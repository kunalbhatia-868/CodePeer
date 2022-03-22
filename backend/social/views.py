from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView

from social.models import Post
from social.serializers import PostSerializer
# Create your views here.


class PostListCreateView(ListCreateAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    