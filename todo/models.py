from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

# Create your models here.

class Todos(models.Model):
    title = models.TextField()
    desc = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

    def get_absolute_url(self):
        return reverse('todo-detail',kwargs={"pk":self.pk})
