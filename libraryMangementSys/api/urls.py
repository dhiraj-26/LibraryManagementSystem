from django.urls import path, include
from .views import bookHome

urlpatterns = [
    path('', bookHome, name='bookHome.api'),
    path('book/',include('api.book.urls')),
    path('user/',include('api.user.urls'))
]