from .models import Book
from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Book
        fields = ['id','name','author','isbn','category']