from typing import Optional
from django.db.models import Model, CharField, UniqueConstraint, Value, When, Case
from django.db.models.functions import Concat

class Author(Model):
    first_name: CharField = CharField(max_length=100, blank=False)
    middle_name: Optional[CharField] = CharField(null = True, max_length=100, blank=False)
    last_name: CharField = CharField(max_length=100, blank=False)

    class Meta:
        db_table = 'authors'
        constraints = [
            UniqueConstraint(
                fields=('first_name', 'middle_name', 'last_name'),
                name='unique_name'
            )
        ]
        
    def clean(self):
        self.first_name = self.first_name.trim().capitalize()
        
        if self.middle_name:
            self.middle_name = self.first_name.trim().capitalize()

        self.last_name = self.last_name.trim().capitalize()

def full_name_annotation(prefix=''):
    middle_name__isnull = prefix + 'middle_name__isnull'

    return Concat(
        prefix + 'first_name',
        Value(' '),
        Case(
            When(
                **{
                    middle_name__isnull: False
                },
                then=Concat(prefix + 'middle_name', Value(' '))
            ),
            default=Value(''),
            output_field=CharField(),
        ), # Conditionally concat with f'{middle_name} ' only if middle_name is not null
        prefix + 'last_name'
    )