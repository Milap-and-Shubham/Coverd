from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from requests import Request, post
from django.conf import settings
from django.shortcuts import redirect
# Create your views here.

SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize"
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1"

class TestView(APIView):
    def get(self, request, format=None):
        return Response({'hey':'this is a test'}, status=status.HTTP_200_OK)

class SpotifyLoginView(APIView):
    def get(self, requests):
        spotify_login_query = {
            "client_id": settings.CLIENT_ID,
            "response_type": "code",
            "redirect_uri": settings.REDIRECT_URI,   
        }

        url = Request("GET", SPOTIFY_AUTH_URL, spotify_login_query).prepare().url()
        
        return Response({'url' : url}, status=status.HTTP_200_OK)

def spotify_callback(request):
    code = request.GET.get('code')
    error = request.GET.get('error')

    if (error):
        print(error)

    spotify_login_query = {
            "client_id": settings.CLIENT_ID,
            "response_type": "code",
            "redirect_uri": settings.REDIRECT_URI,
            "grant_type": "authorization_code",
            "code": code,
            "client_secret" : settings.SPOTIFY_CLIENT_SECRET
        }
    
    response = post(SPOTIFY_TOKEN_URL, spotify_login_query).json()

    access_token = response.get('access_token')
    refresh_token = response.get('refresh_token')
    token_type = response.get('token_type')
    token_expires_in = response.get('expires_in')
    error = response.get('error')