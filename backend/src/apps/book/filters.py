from django_filters import FilterSet, CharFilter, NumberFilter, DateFilter

from src.apps.book.models import Book

class BookFilter(FilterSet):
    title = CharFilter(lookup_expr='icontains')
    author_id = NumberFilter()
    genre_id = NumberFilter()
    isbn = CharFilter(lookup_expr='exact')
    publication_date_from = DateFilter(field_name='publication_date', lookup_expr='gte')
    publication_date_to = DateFilter(field_name='publication_date', lookup_expr='lte')

    class Meta:
        model = Book
        fields = ('title', 'author_id', 'genre_id', 'isbn', 'publication_date')