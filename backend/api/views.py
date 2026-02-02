from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny, IsAuthenticated
import requests
from django.conf import settings
from django.shortcuts import redirect
# Create your views here.

# ? Check URLs are correct later
SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize"
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1"

class TestView(APIView):
    def get(self, request, format=None):
        return Response({'hey':'this is a test'}, status=status.HTTP_200_OK)
    
class CreateUserView(APIView):
    queryset = User.objects.all()
    serializer_class = User
    permission_classes = [AllowAny]

class SpotifyLoginView(APIView):
    def get(self, requests):
        {
            "client_id": settings.CLIENT_ID,
            "response_type": "code",
            "redirect_uri": settings.REDIRECT_URI,   
        }

        url = f"{SPOTIFY_AUTH_URL}?{requests.utils.requote_uri(params)}"
        return redirect(url)