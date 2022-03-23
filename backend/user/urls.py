from django.urls import path

from user.models import UserProfile 
from .views import RelationshipListCreateView,RelationshipUpdateDeleteView,UserProfileSignup
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)


urlpatterns = [
    path("signup/",UserProfileSignup.as_view(),name="signup"),
    path("token/obtain/",TokenObtainPairView.as_view(),name="token_obtain_pair"),
    path("token/refresh/",TokenRefreshView.as_view(),name="token_refresh"),
    path("friends/",RelationshipListCreateView.as_view(),name="friends"),
    path("friends/<int:pk>/",RelationshipUpdateDeleteView.as_view(),name="friends_update"),
]
