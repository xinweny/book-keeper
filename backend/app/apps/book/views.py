from rest_framework.viewsets import ModelViewSet

from app.apps.book.models import Book
from app.apps.book.serializers import GetBooksSerializer, CreateBookSerializer
from app.apps.book.filters import BookFilter

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    filterset_class = BookFilter

    def get_serializer_class(self):
        if self.action == 'list':
            return GetBooksSerializer

        if self.action == 'create':
            return CreateBookSerializer

        return GetBooksSerializer