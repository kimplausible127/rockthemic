# Generated by Django 4.0.1 on 2022-03-06 22:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('songs', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='song',
            old_name='durationg',
            new_name='duration',
        ),
    ]
