# Generated by Django 5.1.3 on 2024-11-12 08:10

import django.core.validators
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('middle_name', models.CharField(max_length=100, null=True)),
                ('last_name', models.CharField(max_length=100)),
            ],
            options={
                'constraints': [models.UniqueConstraint(fields=('first_name', 'middle_name', 'last_name'), name='unique_name')],
            },
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('publication_date', models.DateField()),
                ('isbn', models.CharField(max_length=13, unique=True, validators=[django.core.validators.RegexValidator(message='Please enter a valid ISBN13 number without hyphens.', regex='\\d{13}')])),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.author')),
                ('genre', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.genre')),
            ],
        ),
    ]
