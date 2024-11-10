from rest_framework.serializers import ModelSerializer

from app.apps.book.models import Book
from app.apps.author.serializers import AuthorSerializer
from app.apps.genre.serializers import GenreSerializer

class BookSerializer(ModelSerializer):
    author = AuthorSerializer()
    genre = GenreSerializer()

    class Meta:
        model = Book
        fields = '__all__'