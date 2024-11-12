from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField

from src.apps.book.models import Book
from src.apps.author.models import Author
from src.apps.genre.models import Genre
from src.apps.author.serializers import AuthorSerializer
from src.apps.genre.serializers import GenreSerializer

class GetBooksSerializer(ModelSerializer):
    author = AuthorSerializer()
    genre = GenreSerializer()

    class Meta:
        model = Book
        fields = '__all__'

class CreateBookSerializer(ModelSerializer):
    author = PrimaryKeyRelatedField(queryset=Author.objects.all())
    genre = PrimaryKeyRelatedField(queryset=Genre.objects.all())
    
    class Meta:
        model = Book
        fields = ('title', 'author', 'genre', 'isbn', 'publication_date')