from django_filters import FilterSet, CharFilter

from src.apps.genre.models import Genre

class GenreFilter(FilterSet):
    name = CharFilter(lookup_expr='icontains', label='Name')

    class Meta:
        model = Genre
        fields = ('id', 'name')
