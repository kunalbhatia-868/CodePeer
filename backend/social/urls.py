from django.urls import path
from social.views import CommentsListCreateView, LikeCreateView, PostListCreateView 

urlpatterns = [
    path('posts/',PostListCreateView.as_view(),name="posts"),
    path('posts/<uuid:pk>/comments/',CommentsListCreateView.as_view(),name="comments"),
    path('posts/<uuid:pk>/like/',LikeCreateView.as_view(),name='like')
]
