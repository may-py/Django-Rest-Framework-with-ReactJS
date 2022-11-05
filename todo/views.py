from dataclasses import field
from django.shortcuts import render
from .models import Todos
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView

# Create your views here.


# class TodosList(ListView):
#     model = Todos
#     field = "__all__"
#     template_name = 'todo/home.html'


class TodoDetail(DetailView):
    model = Todos
    template_name = 'todo/detail.html'

class TodoCreate(CreateView):
    model = Todos
    template_name = 'todo/create_update.html'
    fields = ['title','desc']
    success_url = '/'
    
    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super().form_valid(form)

    def get_context_data(self, **kwargs):
        context =  super(TodoCreate,self).get_context_data(**kwargs)
        context['obj_list'] = Todos.objects.all()
        return context


class TodoUpdate(UpdateView):
    model = Todos
    template_name = 'todo/create_update.html'
    fields = "__all__"
    
    def form_valid(self, form):
        return super().form_valid(form)


class TodoDelete(DeleteView):
    model = Todos
    template_name = 'todo/delete.html'
    success_url = "/"

