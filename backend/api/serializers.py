from django.contrib.auth.models import User
from rest_framework import serializers

class SpotifyLogin:
    class Meta:
        model = User
        fields = ["user", "access_token", "refresh_token", "token_expires"]