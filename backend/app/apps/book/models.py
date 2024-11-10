from django.db.models import Model, CharField, DateField, ForeignKey, CASCADE

from app.apps.author.models import Author
from app.apps.genre.models import Genre

class Book(Model):
    title: CharField = CharField(max_length=255)
    author: ForeignKey[Author] = ForeignKey(Author, on_delete=CASCADE)
    genre: ForeignKey[Genre] = ForeignKey(Genre, on_delete=CASCADE)
    publication_date: DateField = DateField()
    isbn: CharField = CharField(unique=True, max_length=13)