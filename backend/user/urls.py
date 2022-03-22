from django.urls import path 
from .views import RelationshipListCreateView,RelationshipUpdateDeleteView

urlpatterns = [
    path("friends/",RelationshipListCreateView.as_view(),name="friends"),
    path("friends/<int:pk>/",RelationshipUpdateDeleteView.as_view(),name="friends_update"),
]
