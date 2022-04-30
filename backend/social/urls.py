from django.urls import path
from social.views import CommentsListCreateView, LikeCreateView, LikeCheckAPIView, PostDetailView, PostListCreateView 

urlpatterns = [
    path('posts/',PostListCreateView.as_view(),name="posts"),
    path('posts/<uuid:pk>/',PostDetailView.as_view(),name="post_detail"),
    path('posts/<uuid:pk>/comments/',CommentsListCreateView.as_view(),name="comments"),
    path('posts/<uuid:pk>/like/',LikeCreateView.as_view(),name='like'),
    path('posts/<uuid:pk>/is_liked/',LikeCheckAPIView.as_view(),name="is_liked_post")
]
