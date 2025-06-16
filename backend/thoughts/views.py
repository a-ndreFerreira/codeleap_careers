from rest_framework import generics
from .models import Thought
from .serializers import ThoughtSerializer

class ThoughtViewSet(generics.ListCreateAPIView):
    queryset = Thought.objects.all().order_by('-created_datetime')
    serializer_class = ThoughtSerializer

class ThoughtUpdateDestroyViewSet(generics.RetrieveUpdateDestroyAPIView):
    queryset = Thought.objects.all()
    serializer_class = ThoughtSerializer