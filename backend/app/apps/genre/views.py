from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response

from app.apps.genre.models import Genre
from app.apps.genre.serializers import GenreSerializer

class GenreViewSet(ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

    def list(self, request):
        serializer = self.get_serializer(self.get_queryset(), many=True)

        return Response(data=serializer.data)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(data=serializer.data, status=status.HTTP_201_CREATED)