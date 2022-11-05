from dataclasses import field
from rest_framework.serializers import ModelSerializer
from todo.models import Todos
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['username','password']
        extra_kwargs = {'password': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user



class TodoSerializer(ModelSerializer):
    owner = UserSerializer(read_only=True)
    class Meta:
        model = Todos
        fields = "__all__"
