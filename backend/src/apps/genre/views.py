from rest_framework.viewsets import ModelViewSet

from src.apps.genre.models import Genre
from src.apps.genre.serializers import GenreSerializer
from src.apps.genre.filters import GenreFilter

class GenreViewSet(ModelViewSet):
    queryset = Genre.objects.all().order_by('name')
    serializer_class = GenreSerializer
    filterset_class = GenreFilter