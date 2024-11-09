from typing import Optional
from django.db.models import Model, CharField, UniqueConstraint

class Author(Model):
    first_name: CharField = CharField(max_length=255)
    middle_name: Optional[CharField] = CharField(null = True, max_length=255)
    last_name: CharField = CharField(max_length=255)

    class Meta:
        constraints = [
            UniqueConstraint(
                fields=('first_name', 'middle_name', 'last_name'),
                name='unique_name'
            )
        ]