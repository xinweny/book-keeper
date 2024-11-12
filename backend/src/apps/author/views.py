from rest_framework.viewsets import ModelViewSet

from src.apps.author.filters import AuthorFilter

from src.apps.author.models import Author, full_name_annotation
from src.apps.author.serializers import AuthorSerializer

class AuthorViewSet(ModelViewSet):
    queryset = Author.objects.annotate(full_name=full_name_annotation()).all().order_by('full_name')
    serializer_class = AuthorSerializer
    filterset_class = AuthorFilter