from distutils.command.upload import upload
from django.db import models
from django.conf import settings


class Song(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             related_name='songs_created',
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, blank=True)
    song = models.FileField(upload_to='songs/%Y/%m/%d/')
    created = models.DateField(auto_now_add=True, db_index=True)
    duration = models.CharField(max_length=20) 

    def __str__(self):
        return self.title