from django.urls import path

from .views import (
    RelationshipListCreateView,
    CheckFriend,
    RelationshipUpdateDeleteView,
    CurrentUserDetail,
    RequestListView,
    SuggestListView,
    UserDetailView,
    UserProfileSignup,
)
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView)


urlpatterns = [
    path("<int:pk>/",UserDetailView.as_view(),name="user-detail"),
    path("signup/",UserProfileSignup.as_view(),name="signup"),
    path("token/obtain/",TokenObtainPairView.as_view(),name="token_obtain_pair"),
    path("token/refresh/",TokenRefreshView.as_view(),name="token_refresh"),
    path("connections/<int:pk>/",RelationshipUpdateDeleteView.as_view(),name="friends_update"),
    path("connections/",RelationshipListCreateView.as_view(),name="friends"),
    path("pending-requests/",RequestListView.as_view(),name="pending_requests"),
    path("connections/check/<int:pk>",CheckFriend.as_view(),name="check_friends"), 
    path("current/",CurrentUserDetail.as_view(),name="curr_user"),
    path("people-you-may-know/",SuggestListView.as_view(),name="people-you-may-know"),
    
]
