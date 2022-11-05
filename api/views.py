from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from todo.models import Todos
from .Serializers import TodoSerializer, UserSerializer
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User


# Create your views here.


class UserViewset(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TodoViewset(ModelViewSet):
    queryset = Todos.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
