from django.db import models
from django.utils import timezone

class Thought(models.Model):
    username = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    content = models.TextField()
    created_datetime = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.title} by {self.username}'