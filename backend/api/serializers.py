from django.contrib.auth.models import User
from rest_framework import serializers

# ! Seems like this is acutally not needed due to spotify api login, though depends on how we want to handle stuff
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class SpotifyLogin:
    class Meta:
        model = User
        fields = ["user", "access_token", "refresh_token", "token_expires"]
        