from django.urls import path
from .views import ThoughtViewSet, ThoughtUpdateDestroyViewSet

urlpatterns = [
    path('careers/', ThoughtViewSet.as_view(), name='thought-list-create'),
    path('careers/<int:pk>/', ThoughtUpdateDestroyViewSet.as_view(), name='thought-update-destroy'),
]
