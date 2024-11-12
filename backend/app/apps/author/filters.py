from django_filters import FilterSet, CharFilter

from app.apps.author.models import Author

class AuthorFilter(FilterSet):
    name = CharFilter(field_name='full_name', lookup_expr='icontains', label='Name')

    class Meta:
        model = Author
        fields = ('first_name', 'middle_name', 'last_name')