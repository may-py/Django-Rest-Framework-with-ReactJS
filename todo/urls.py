from django.urls import path
from .views import  TodoDetail, TodoCreate, TodoUpdate, TodoDelete

urlpatterns = [
    # path('',TodosList.as_view(),name='home'),
    path('todo/<int:pk>/',TodoDetail.as_view(),name='todo-detail'),
    path('',TodoCreate.as_view(),name='home'),
    path('todo/<int:pk>/update/',TodoUpdate.as_view(),name='update'),
    path('todo/<int:pk>/delete/',TodoDelete.as_view(),name='delete')
]