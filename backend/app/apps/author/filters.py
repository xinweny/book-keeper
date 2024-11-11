from django_filters import FilterSet, CharFilter
from django.db.models import QuerySet

from app.apps.author.models import Author

class AuthorFilter(FilterSet):
    full_name = CharFilter(lookup_expr='icontains', label='Name')

    class Meta:
        model = Author
        fields = ('first_name', 'middle_name', 'last_name')

    def author_name_filter(self, queryset: QuerySet[Author], name: str, value: str):
        return filter_full_name(queryset, name, value)