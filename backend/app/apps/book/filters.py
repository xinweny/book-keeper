from django_filters import FilterSet, CharFilter, NumberFilter, DateFilter

from app.apps.book.models import Book

class BookFilter(FilterSet):
    title = CharFilter(lookup_expr='icontains')
    author = CharFilter(field_name='author__full_name', lookup_expr='icontains', label='Author name')
    genre_id = NumberFilter()
    isbn = CharFilter(lookup_expr='exact')
    publication_date_from = DateFilter(field_name='publication_date', lookup_expr='gte')
    publication_date_to = DateFilter(field_name='publication_date', lookup_expr='lte')

    class Meta:
        model = Book
        fields = ('title', 'author', 'genre_id', 'isbn', 'publication_date')