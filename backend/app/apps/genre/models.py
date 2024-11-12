from django.db.models import Model, CharField

class Genre(Model):
    name: CharField = CharField(max_length=255, unique=True, blank=False)
    
    class Meta:
        db_table = 'genres'

    def clean(self):
        self.name = self.name.trim().capitalize()