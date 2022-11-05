from email.mime import base
from xml.etree.ElementInclude import include
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import TodoViewset, UserViewset

route = DefaultRouter()
route.register('users',UserViewset,basename='users')
route.register('todos',TodoViewset,basename='todos')



urlpatterns = [

] 

urlpatterns += route.urls

