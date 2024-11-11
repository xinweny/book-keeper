from rest_framework.viewsets import ModelViewSet

from app.apps.book.models import Book
from app.apps.book.serializers import BookSerializer
from app.apps.book.filters import BookFilter

class BookViewSet(ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    filterset_class = BookFilter