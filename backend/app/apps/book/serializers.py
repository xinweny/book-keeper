from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField

from app.apps.book.models import Book
from app.apps.author.models import Author
from app.apps.genre.models import Genre
from app.apps.author.serializers import AuthorSerializer
from app.apps.genre.serializers import GenreSerializer

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