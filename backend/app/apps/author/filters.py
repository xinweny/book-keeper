from django_filters import FilterSet, CharFilter

from app.apps.author.models import Author

class AuthorFilter(FilterSet):
    full_name = CharFilter(method='author_name_filter', label='Name')

    class Meta:
        model = Author
        fields = ('first_name', 'middle_name', 'last_name')