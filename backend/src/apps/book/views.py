from rest_framework.viewsets import ModelViewSet

from src.apps.book.models import Book
from src.apps.book.serializers import GetBooksSerializer, CreateBookSerializer
from src.apps.book.filters import BookFilter

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    filterset_class = BookFilter

    def get_serializer_class(self):
        if self.action == 'list':
            return GetBooksSerializer

        if self.action == 'create':
            return CreateBookSerializer

        return GetBooksSerializer