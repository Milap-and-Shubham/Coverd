from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class SpotifyAccountModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    access_token = models.CharField(max_length=255)
    refresh_token = models.CharField(max_length=255)
    access_token_expires_at = models.DateTimeField()