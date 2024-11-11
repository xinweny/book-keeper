from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from app.apps.book.models import Book
from app.apps.book.serializers import BookSerializer
from app.apps.book.filters import BookFilter
from app.apps.author.models import full_name_annotation

class BookViewSet(ModelViewSet):
    queryset = Book.objects.annotate(author__full_name=full_name_annotation('author__')).all()
    serializer_class = BookSerializer
    filterset_class = BookFilter

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)