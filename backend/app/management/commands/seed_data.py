from django.core.management.base import BaseCommand
from faker import Faker
import random
from datetime import date

from app.apps.book.models import Book
from app.apps.author.models import Author
from app.apps.genre.models import Genre

class Command(BaseCommand):
    help = 'Seed database with sample inventory data'
    
    def handle(self, *args, **options):
        self.stdout.write(self.style.SUCCESS('Seeding database...'))
        
        fake = Faker()
        
        # Create authors
        authors: list[Author] = []
        
        for i in range(20):
            first_name = fake.first_name()
            middle_name = None if random.uniform(0, 1) > 0.2 else fake.first_name() # 20% chance to have middle name
            last_name = fake.last_name()
            
            authors.append(Author(
                id=i + 1,
                first_name=first_name,
                middle_name=middle_name,
                last_name=last_name
            ))

        # Create genres
        genre_names = [
            'Fiction',
            'Action and Adventure',
            'Comedy',
            'Crime, Mystery and Thriller',
            'Fantasy',
            'Horror',
            'Science Fiction',
            'Superhero',
            'Romance',
            'Non-fiction'
            'Academic',
            'Biography',
            'Cookbook',
            'Reference',
            'Self-help',
            'Travel',
            'True Crime',
        ]
        genres: list[Genre] = [Genre(id=i + 1, name=n) for i, n in enumerate(genre_names)]
            
        # Create books
        books = []
        
        for i in range(100):
            title = fake.sentence(nb_words=3, variable_nb_words=True)
            author_id = authors[random.randint(0, len(authors) - 1)].id
            genre_id = genres[random.randint(0, len(genres) - 1)].id
            publication_date = fake.date_between(date(1900, 1, 1), date.today())
            isbn = fake.isbn13(separator='')
            
            books.append(Book(
                id=i + 1,
                title=title,
                author_id=author_id,
                genre_id=genre_id,
                publication_date=publication_date,
                isbn=isbn
            ))
            
        # Save to database
        Author.objects.bulk_create(authors)
        Genre.objects.bulk_create(genres)
        Book.objects.bulk_create(books)
        
        self.stdout.write(self.style.SUCCESS('Seeding complete.'))