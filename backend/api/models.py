from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class SpotifyAccountModel(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True, max_length=50)
    access_token = models.CharField(max_length=255)
    refresh_token = models.CharField(max_length=255)
    token_expires_in = models.DateTimeField()
    token_type = models.CharField(max_length=50)