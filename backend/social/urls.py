from django.urls import path

from social.views import PostListCreateView 

urlpatterns = [
    path('posts/',PostListCreateView.as_view(),name="posts")
]
