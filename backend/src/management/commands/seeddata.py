from django.core.management.base import BaseCommand
from faker import Faker
import random
from datetime import date

from src.apps.book.models import Book
from src.apps.author.models import Author
from src.apps.genre.models import Genre

class Command(BaseCommand):
    help = 'Seed database with sample inventory data'
    
    def handle(self, *args, **options):
        self.stdout.write('Seeding database...')
        
        fake = Faker()
        
        # Create authors
        authors = []
        
        for _ in range(20):
            first_name = fake.first_name()
            middle_name = None if random.uniform(0, 1) > 0.2 else fake.first_name() # 20% chance to have middle name
            last_name = fake.last_name()
            
            authors.append(Author(
                first_name=first_name,
                middle_name=middle_name,
                last_name=last_name
            ))
        
        authors = Author.objects.bulk_create(authors)

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
            'Non-fiction',
            'Academic',
            'Biography',
            'Cookbook',
            'Reference',
            'Self-help',
            'Travel',
            'True Crime',
        ]
        genres: list[Genre] = [Genre(name=n) for n in genre_names]

        genres = Genre.objects.bulk_create(genres)
            
        # Create books
        book_genre_titles = [
            (0, 'The Great Adventure'),
            (1, 'The Last Quest'),
            (2, 'Laughing All the Way'),
            (3, 'Murder on the Orient Express'),
            (4, 'Magic Realms'),
            (5, 'Haunting Shadows'),
            (6, 'Future Worlds'),
            (7, 'Heroes Unite'),
            (8, 'Love in Bloom'),
            (9, 'The Power of Knowledge'),
            (10, 'Scientific Discoveries'),
            (11, 'The Life of Shakespeare'),
            (12, 'The Art of Cooking'),
            (13, 'Encyclopedia of Everything'),
            (14, 'How to Improve Your Life'),
            (15, 'Wandering the World'),
            (16, 'True Crime: Murder and Mystery'),
            (0, 'The Great Adventure: Lost Worlds'),
            (1, 'Journey Through Time'),
            (2, 'Jokes and Stories'),
            (3, 'Secrets in the Dark'),
            (4, 'Wizards of the Old World'),
            (5, 'Scream of the Night'),
            (6, 'The Last Starship'),
            (7, 'The Super Soldier'),
            (8, 'Heartbeats'),
            (9, 'The Hidden Truth'),
            (10, 'Biology Explained'),
            (11, 'Einstein: A Biography'),
            (12, 'Masterchef\'s Guide'),
            (13, 'History of the World'),
            (14, 'The Art of Positive Thinking'),
            (15, 'Explore the Continents'),
            (16, 'Gangster\'s Paradise'),
            (6, 'Star Wars: The New Order'),
            (7, 'The Superhero League'),
            (8, 'Romantic Escape'),
            (9, 'The Truth Behind History'),
            (10, 'The Wonders of the Brain'),
            (11, 'The Great Writers'),
            (12, 'Healthy Cooking for Beginners'),
            (13, 'World Atlas'),
            (14, 'The Ultimate Guide to Self-Improvement'),
            (15, 'Living Your Best Life'),
            (16, 'Around the World in 80 Days'),
            (3, 'The Detective\'s Diary'),
            (4, 'Into the Forbidden Forest'),
            (5, 'Escape from the Haunted Mansion'),
            (6, 'The Future of Humanity'),
            (7, 'Avengers Assemble'),
            (8, 'Love After All'),
            (10, 'Culinary Adventures'),
            (12, 'The Science of Happiness'),
            (14, 'Globetrotter\'s Guide'),
            (16, 'Chasing the Killer'),
            (5, 'Dark Rites'),
            (6, 'The Chronicles of Time'),
            (7, 'Superheroes and Villains'),
            (8, 'Finding Forever Love'),
            (9, 'The Truth About Our Past'),
            (10, 'The Evolution of Life'),
            (11, 'Mark Twain: A Life'),
            (12, 'Gourmet Recipes for All'),
            (14, 'Mastering the Mind'),
            (15, 'Lost in Paris'),
            (3, 'The Spy Network'),
            (6, 'Into the Depths of Space'),
            (7, 'The Superhero\'s Journey'),
            (8, 'Tales of Love'),
            (9, 'The Mystery of the Pyramids'),
            (10, 'Understanding the Cosmos'),
            (11, 'The Biographies of Kings'),
            (12, 'The Perfect Meal'),
            (14, 'Building Your Confidence'),
            (15, 'Exploring Unknown Lands'),
            (16, 'The Crime of the Century')
        ]

        books = [Book(
            title=book[1],
            author_id=authors[random.randint(0, len(authors) - 1)].id,
            genre_id=book[0] + 1,
            publication_date=fake.date_between(date(1980, 1, 1), date.today()),
            isbn=fake.isbn13(separator='')
        ) for book in book_genre_titles]
        
        books = Book.objects.bulk_create(books)
        
        self.stdout.write(self.style.SUCCESS('Seeding complete.'))