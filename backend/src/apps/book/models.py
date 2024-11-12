from django.db.models import Model, CharField, DateField, ForeignKey, CASCADE
from django.core.validators import RegexValidator

from src.apps.author.models import Author
from src.apps.genre.models import Genre

# Table should have been named "Inventory"
class Book(Model):
    title: CharField = CharField(max_length=255, blank=False)
    author: ForeignKey[Author] = ForeignKey(Author, on_delete=CASCADE)
    genre: ForeignKey[Genre] = ForeignKey(Genre, on_delete=CASCADE)
    publication_date: DateField = DateField()
    isbn: CharField = CharField(
        unique=True,
        max_length=13,
        validators=[
            RegexValidator(
                regex=r'\d{13}',
                message='Please enter a valid ISBN13 number without hyphens.'
            ),
        ],
    )
    
    class Meta:
        db_table = 'books'

    def clean(self):
        self.title = self.title.trim()