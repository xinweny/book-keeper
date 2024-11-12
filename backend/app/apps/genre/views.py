from rest_framework.viewsets import ModelViewSet

from app.apps.genre.models import Genre
from app.apps.genre.serializers import GenreSerializer
from app.apps.genre.filters import GenreFilter

class GenreViewSet(ModelViewSet):
    queryset = Genre.objects.all().order_by('name')
    serializer_class = GenreSerializer
    filterset_class = GenreFilter