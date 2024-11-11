from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from app.apps.author.filters import AuthorFilter

from app.apps.author.models import Author, full_name_annotation
from app.apps.author.serializers import AuthorSerializer

class AuthorViewSet(ModelViewSet):
    queryset = Author.objects.annotate(full_name=full_name_annotation()).all()
    serializer_class = AuthorSerializer
    filterset_class = AuthorFilter

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)